import app from '../server';
import request from 'supertest';
//const request = supertest(app);
describe('POST /weather/:cityName', () => {
  describe('Enter a valid City name', () => {
    test('It should give 200 status code', async () => {
      const response = await request(app).post('/weather/:cityName').send({
        cityName: 'alkmaar',
      });
      expect(response.statusCode).toBe(200);
    });
    test('It should give specify json in the content type header', async () => {
      const response = await request(app).post('/weather/:cityName').send({
        cityName: 'alkmaar',
      });
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json'),
      );
    });
  });
});
