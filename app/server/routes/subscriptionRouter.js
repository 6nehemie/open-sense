import { Router } from 'express';
import { createStripeCheckoutSession } from '../utils/checkout.js';

const router = Router();

router.route('/checkouts').post(
  catchAsyncErrors(async (req, res) => {
    res.send(await createStripeCheckoutSession(body.line_items));
  })
);

// Catch async errors when awaiting promises
function catchAsyncErrors(fn) {
  return function (req, res, next) {
    return fn(req, res, next).catch(next);
  };
}

export default router;
