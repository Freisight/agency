// Import cases page data
import { casesData } from '@/data/casesData';

export default function handler(req, res) {
  const data = { casesData };
  res.status(200).json(data.casesData);
}
