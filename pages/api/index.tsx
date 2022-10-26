export const config = {
  api: {
    bodyParser: false as const,
  },
};

export default function handler(_req, res) {
  res.status(200).json({})
}
