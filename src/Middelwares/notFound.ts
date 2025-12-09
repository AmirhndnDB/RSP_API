import type { Request, Response  } from 'express';

export default function notFoundHandler(
  req: Request,
  res: Response,
):void {

  res.status(404).json({
    success: false,
    message:'Rout not found',
    data:null
  });
}
