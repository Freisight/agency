// Import index page data
import { indexData } from '@/data/indexData';

export default function handler(req, res) {
  const data = { indexData };
  res.status(200).json(data.indexData);
}
