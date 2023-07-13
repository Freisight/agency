// Import cases page data
import { servicesData } from '@/data/servicesData';

export default function handler(req, res) {
  const data = { servicesData };
  res.status(200).json(data.servicesData);
}
