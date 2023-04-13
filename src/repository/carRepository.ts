import prisma from "../config/database.js";

async function getCars() {
  return prisma.cars.findMany()
}

async function getCar(id: number) {
  return prisma.cars.findUnique({
    where: {
      id
    }
  })
}

async function getCarWithLicensePlate(licensePlate: string) {
  return prisma.cars.findUnique({
    where: {
      licensePlate
    }
  })
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  return prisma.cars.create({
    data: {
      model, licensePlate, year, color
    }
  })
}

async function deleteCar(id: number) {
  return prisma.cars.delete({
    where: {
      id
    }
  })
}

async function updateCar(model: string, licensePlate: string, year: number, color: string, id: number) {
  return prisma.cars.update({
    where: {
      id
    },
    data: {
      model, licensePlate, year, color
    }
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar,
  updateCar
}

export default carRepository;