import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Create Products
  await prisma.product.create({
    data: {
      name: 'Classic Milk 3.2%',
      description: 'Fresh, whole cow`s milk with a rich and creamy taste.',
      imageUrl: '/images/milk-classic.png', // Placeholder image path
      proteins: 3.0,
      fats: 3.2,
      carbs: 4.7,
      calories: 60,
    },
  });

  await prisma.product.create({
    data: {
      name: 'Skimmed Milk 0.5%',
      description:
        'Light and healthy skimmed milk, perfect for a low-fat diet.',
      imageUrl: '/images/milk-skimmed.png',
      proteins: 3.4,
      fats: 0.5,
      carbs: 5.0,
      calories: 35,
    },
  });

  console.log('Products seeded.');

  // Create Vacancies
  await prisma.vacancy.create({
    data: {
      title: 'Dairy Technologist',
      department: 'Production',
      location: 'Main Factory, Frankfurt',
      description:
        'We are looking for an experienced dairy technologist to join our production team. Responsibilities include quality control, process optimization, and new product development.',
    },
  });

  console.log('Vacancies seeded.');

  // Create Stores
  await prisma.store.create({
    data: {
      name: 'REWE Center',
      address: '123 Market St',
      city: 'Frankfurt',
      postalCode: '60311',
      latitude: 50.1109,
      longitude: 8.6821,
    },
  });

  await prisma.store.create({
    data: {
      name: 'EDEKA Supermarket',
      address: '456 Garden Ave',
      city: 'Offenbach',
      postalCode: '63065',
      latitude: 50.1042,
      longitude: 8.7663,
    },
  });

  console.log('Stores seeded.');
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    // process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
