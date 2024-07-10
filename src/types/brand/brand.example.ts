import { Brand } from "./brand.type.js";

// EXAMPLE
type UserId = Brand<string, 'UserId'>;
type OrderId = Brand<string, 'OrderId'>;

function fetchUserById(id: UserId): Brand<string, 'UserId'> {
  return id;
}

function fetchOrderByOrderId(id: OrderId): Brand<string, 'OrderId'> {
  return id;
}

// Creation of branded types
const userId: UserId = '12345' as UserId;
const orderId: OrderId = '67890' as OrderId;

// These calls are safe and clear
fetchUserById(userId);
fetchOrderByOrderId(orderId);

// Error: Argument of type 'OrderId' is not assignable
// to parameter of type 'UserId'
// fetchUserById(orderId);
