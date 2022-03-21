import {ALL_DOGS} from '../../data/dogs'

export default function handler(req, res) {
  res.status(200).json(ALL_DOGS)
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction