const { Sequelize } = require('sequelize');

// jest.setup.js

jest.setTimeout(30000); // Aumenta el timeout si tus tests tardan más tiempo



// Mock de la conexión a la base de datos
jest.mock('./config/database', () => {
  const sequelize = new Sequelize('sqlite::memory:');
  return {
    sequelize,
    authenticate: jest.fn().mockResolvedValue(true),
    transaction: jest.fn().mockReturnValue({
      commit: jest.fn(),
      rollback: jest.fn(),
    }),
  };
});

// Mock console.error to avoid polluting test output
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

