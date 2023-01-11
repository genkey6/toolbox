mod schema;

use actix_web::{get, post, web, web::Data, App, HttpResponse, HttpServer, Result};
use async_graphql::{http::GraphiQLSource, EmptyMutation, EmptySubscription, Schema, ID};
use async_graphql_actix_web::{GraphQLRequest, GraphQLResponse};
use schema::{Animal, ApiSchema, Classis, Query};

#[post("/graphql")]
async fn index(schema: web::Data<ApiSchema>, req: GraphQLRequest) -> GraphQLResponse {
    schema.execute(req.into_inner()).await.into()
}

#[get("/")]
async fn index_graphiql() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok()
        .content_type("text/html; charset=utf-8")
        .body(
            GraphiQLSource::build()
                .endpoint("http://localhost:4003")
                .finish(),
        ))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let animals = vec![
        Animal {
            id: ID(1.to_string()),
            name: "パンダ".to_string(),
            classis: Classis {
                name: "哺乳類".to_string(),
            },
        },
        Animal {
            id: ID(2.to_string()),
            name: "ホッキョクグマ".to_string(),
            classis: Classis {
                name: "哺乳類".to_string(),
            },
        },
        Animal {
            id: ID(3.to_string()),
            name: "ペンギン".to_string(),
            classis: Classis {
                name: "鳥類".to_string(),
            },
        },
    ];

    let schema = Schema::build(Query, EmptyMutation, EmptySubscription)
        .data(animals)
        .finish();

    println!("GraphiQL IDE: http://localhost:4003");

    HttpServer::new(move || {
        App::new()
            .app_data(Data::new(schema.clone()))
            .service(index)
            .service(index_graphiql)
    })
    .bind("127.0.0.1:4003")?
    .run()
    .await
}
