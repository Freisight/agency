// Import interdace data
import { interfaceData } from '@/data/interfaceData';

export default function handler(req, res) {
  const data = { interfaceData };
  res.status(200).json(data.interfaceData);
}
