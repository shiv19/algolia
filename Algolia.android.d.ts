declare module com {
    module algolia {
        module search {
            module saas {
                class Query {
                    constructor(query: string);
                }

                class Index {
                    searchAsync(query: com.algolia.search.saas.Query, Function);
                }

                class Client {
                    constructor(appId:string, appKey:string);
                    initIndex(name:string): Index;
                }

                module CompletionHandler {
                     export function extend(context:any); /* Need to add all function rather use any */
                }
            }
        }
    }
}