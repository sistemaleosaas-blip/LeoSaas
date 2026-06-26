import request from 'supertest';
import app from '../app';

describe('Joke Generator API', () => {
  describe('GET /api/jokes/random', () => {
    it('deve retornar uma piada aleatória', async () => {
      const response = await request(app).get('/api/jokes/random');

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveProperty('id');
      expect(response.body.data).toHaveProperty('setup');
      expect(response.body.data).toHaveProperty('punchline');
      expect(response.body.data).toHaveProperty('type');
    });
  });

  describe('GET /api/jokes/random/:count', () => {
    it('deve retornar 3 piadas aleatórias', async () => {
      const response = await request(app).get('/api/jokes/random/3');

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.count).toBe(3);
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.data.length).toBe(3);
    });

    it('deve limitar o máximo a 10 piadas', async () => {
      const response = await request(app).get('/api/jokes/random/20');

      expect(response.status).toBe(200);
      expect(response.body.count).toBeLessThanOrEqual(10);
    });
  });

  describe('GET /api/jokes/type/:jokeType', () => {
    it('deve retornar uma piada do tipo "general"', async () => {
      const response = await request(app).get('/api/jokes/type/general');

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.type).toBe('general');
    });

    it('deve retornar uma piada do tipo "programming"', async () => {
      const response = await request(app).get('/api/jokes/type/programming');

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.type).toBe('programming');
    });

    it('deve retornar erro para tipo inválido', async () => {
      const response = await request(app).get('/api/jokes/type/tipo-invalido');

      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/jokes/types/list', () => {
    it('deve retornar lista de tipos disponíveis', async () => {
      const response = await request(app).get('/api/jokes/types/list');

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.count).toBeGreaterThan(0);
    });
  });
});
