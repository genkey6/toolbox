use async_graphql::{Context, EmptyMutation, EmptySubscription, Object, Schema, SimpleObject, ID};

#[derive(SimpleObject)]
pub struct Classis {
    pub name: String,
}

#[derive(SimpleObject)]
pub struct Animal {
    pub id: ID,
    #[graphql(shareable)]
    pub name: String,
    pub classis: Classis,
}

pub struct Query;

#[Object]
impl Query {
    #[graphql(entity)]
    async fn find_animal_by_id<'a>(&self, ctx: &'a Context<'_>, id: ID) -> Option<&'a Animal> {
        let animals = ctx.data_unchecked::<Vec<Animal>>();
        animals.iter().find(|animal| animal.id == id)
    }

    async fn animals<'a>(&self, ctx: &'a Context<'_>) -> &'a Vec<Animal> {
        ctx.data_unchecked::<Vec<Animal>>()
    }
}

pub type ApiSchema = Schema<Query, EmptyMutation, EmptySubscription>;
