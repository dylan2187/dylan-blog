// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Random, mock } from 'mockjs';

type Data = {
	name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	res.status(200).json(
		mock({
			'list|100': [
				{
					// 属性 id 是一个自增数，起始值为 1，每次增 1
					// 'id|+1': 1,
					'name|1': [Random.cname(), Random.cname()],
					createDate: Random.date('yyyy-MM-dd'),
					address: Random.county(true),
				},
			],
		})
	);
}
