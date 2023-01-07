use async_graphql::{EmptySubscription, Object, Schema, SimpleObject};
use std::sync::Mutex;

pub struct Query;

#[Object]
impl Query {
  async fn product_count(&self) -> usize {
    PRODUCTS.lock().unwrap().len()
  }

  async fn products(&self) -> Vec<Product> {
    PRODUCTS.lock().unwrap().clone()
  }
}

static SEQUENCE_ID: Mutex<usize> = Mutex::new(0);
static PRODUCTS: Mutex<Vec<Product>> = Mutex::new(vec![]);

#[derive(SimpleObject, Clone)]
struct Product {
  id: usize,
  name: String,
}

pub struct Mutation;

#[Object]
impl Mutation {
  async fn register_product(&self, name: String) -> Product {
    let mut id = SEQUENCE_ID.lock().unwrap();
    *id += 1;
    let product = Product { id: *id, name };
    PRODUCTS.lock().unwrap().push(product.clone());
    product
  }
}

pub type ApiSchema = Schema<Query, Mutation, EmptySubscription>;
