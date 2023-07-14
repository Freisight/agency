// Import news preview data
import { newsData } from '@/data/newsData';

export default function handler(req, res) {
  const data = { newsData };
  res.status(200).json(data.newsData);
}
