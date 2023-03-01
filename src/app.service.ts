import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGraphqlTest(): string {
    var { graphql, buildSchema } = require('graphql');

    var schema = buildSchema(`type Query {
      hello: String
    }
    `);

    var rootValue = { hello: () => 'Hello world graphql!' };

    var source = '{ hello }';

    return graphql({ schema, source, rootValue }).then((response) => {
      console.log(response.data.hello);

      return response?.data?.hello;
    });
  }
}
