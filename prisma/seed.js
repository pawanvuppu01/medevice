const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Profiles (users)
  const adminPwd = await bcrypt.hash('AdminPass123!', 10);
  const staffPwd = await bcrypt.hash('StaffPass123!', 10);
  const clientPwd = await bcrypt.hash('ClientPass123!', 10);

  const admin = await prisma.profiles.upsert({
    where: { email: 'admin@medevice.local' },
    update: {},
    create: {
      fullName: 'Site Admin',
      email: 'admin@medevice.local',
      role: 'admin',
      hashedPassword: adminPwd,
      phone: '555-0100',
      company: 'Medevice'
    }
  });

  const staff = await prisma.profiles.upsert({
    where: { email: 'staff@medevice.local' },
    update: {},
    create: {
      fullName: 'Staff Member',
      email: 'staff@medevice.local',
      role: 'staff',
      hashedPassword: staffPwd,
      phone: '555-0101',
      company: 'Medevice'
    }
  });

  const clientUser = await prisma.profiles.upsert({
    where: { email: 'client@acme.com' },
    update: {},
    create: {
      fullName: 'ACME Contact',
      email: 'client@acme.com',
      role: 'client',
      hashedPassword: clientPwd,
      phone: '555-0123',
      company: 'ACME'
    }
  });

  // Clients
  let client = await prisma.clients.findFirst({ where: { email: 'client@acme.com' } });
  if (!client) {
    client = await prisma.clients.create({
      data: {
        name: 'ACME Corporation',
        email: 'client@acme.com',
        company: 'ACME'
      }
    });
  }

  // Projects
  let project = await prisma.projects.findFirst({ where: { title: 'AI Medical Assistant' } });
  if (!project) {
    project = await prisma.projects.create({
      data: {
        title: 'AI Medical Assistant',
        description: 'Prototype for an intelligent clinical assistant',
        category: 'AI-Medtech',
        clientName: client.name,
        startDate: new Date(),
        status: 'Active'
      }
    });
  }

  // Messages (contact)
  await prisma.messages.createMany({
    data: [
      {
        fullName: 'John Doe',
        email: 'john@example.com',
        phone: '555-0140',
        service: 'Consulting',
        message: 'Interested in regulatory consulting.'
      },
      {
        fullName: 'Jane Roe',
        email: 'jane@example.com',
        phone: '555-0141',
        service: 'Training',
        message: 'Looking for a training schedule.'
      }
    ]
  });

  // Trainings
  await prisma.trainings.createMany({
    data: [
      {
        title: 'Medical Device Regulatory Basics',
        description: 'Overview of regulation for medical devices',
        instructor: 'Dr. Smith',
        duration: '4 hours',
        level: 'Beginner',
        price: 499
      },
      {
        title: 'Post-Market Surveillance',
        description: 'Implementing effective PMS programs',
        instructor: 'Dr. Lee',
        duration: '3 hours',
        level: 'Intermediate',
        price: 399
      }
    ]
  });

  // Files
  await prisma.files.create({
    data: {
      fileName: 'sample-proposal.pdf',
      fileType: 'application/pdf',
      fileUrl: '/public/files/sample-proposal.pdf',
      uploadedBy: admin.email
    }
  });

  // Notifications & logs
  await prisma.notifications.create({
    data: {
      title: 'Welcome',
      message: 'Welcome to the Medevice demo system',
      type: 'info'
    }
  });

  await prisma.logs.create({
    data: {
      action: 'seed:initial',
      user: admin.email,
      details: 'Initial seed data created'
    }
  });

  console.log('Seeding complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
