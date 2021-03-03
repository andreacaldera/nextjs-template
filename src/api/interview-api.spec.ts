import { createServer } from 'http';
import { NextApiHandler } from 'next';
import { apiResolver } from 'next/dist/next-server/server/api-utils';
import request from 'supertest';
import { interviewApi } from './interview-api';

export const testClient = async (
  handler: NextApiHandler,
  { host = 'example.com' }: { host?: string } = {},
) => {
  return request(
    createServer(async (req, res) => {
      req.headers.host = host;
      return apiResolver(req, res, undefined, handler, {} as any, undefined);
    }),
  );
};

describe('interview api', () => {
  it('returns test api response', async () => {
    const client = await testClient(interviewApi);
    const response = await client.get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: 'Interview API',
    });
  });
});
