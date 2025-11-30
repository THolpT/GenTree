
/**
 * Client
**/

import * as runtime from './runtime/binary.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tree
 * 
 */
export type Tree = $Result.DefaultSelection<Prisma.$TreePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  UNKNOWN: 'UNKNOWN'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more People
 * const people = await prisma.person.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more People
   * const people = await prisma.person.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => $Utils.JsPromise<void> : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tree`: Exposes CRUD operations for the **Tree** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trees
    * const trees = await prisma.tree.findMany()
    * ```
    */
  get tree(): Prisma.TreeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Person: 'Person',
    User: 'User',
    Tree: 'Tree'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "person" | "user" | "tree"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tree: {
        payload: Prisma.$TreePayload<ExtArgs>
        fields: Prisma.TreeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>
          }
          findFirst: {
            args: Prisma.TreeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>
          }
          findMany: {
            args: Prisma.TreeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>[]
          }
          create: {
            args: Prisma.TreeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>
          }
          createMany: {
            args: Prisma.TreeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>[]
          }
          delete: {
            args: Prisma.TreeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>
          }
          update: {
            args: Prisma.TreeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>
          }
          deleteMany: {
            args: Prisma.TreeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TreeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>[]
          }
          upsert: {
            args: Prisma.TreeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>
          }
          aggregate: {
            args: Prisma.TreeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTree>
          }
          groupBy: {
            args: Prisma.TreeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreeCountArgs<ExtArgs>
            result: $Utils.Optional<TreeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    person?: PersonOmit
    user?: UserOmit
    tree?: TreeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    trees: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trees?: boolean | UserCountOutputTypeCountTreesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTreesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreeWhereInput
  }


  /**
   * Count Type TreeCountOutputType
   */

  export type TreeCountOutputType = {
    persons: number
  }

  export type TreeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persons?: boolean | TreeCountOutputTypeCountPersonsArgs
  }

  // Custom InputTypes
  /**
   * TreeCountOutputType without action
   */
  export type TreeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeCountOutputType
     */
    select?: TreeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TreeCountOutputType without action
   */
  export type TreeCountOutputTypeCountPersonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    name: string | null
    givenName: string | null
    surname: string | null
    gender: $Enums.Gender | null
    birthDate: Date | null
    birthPlace: string | null
    deathDate: Date | null
    deathPlace: string | null
    img: string | null
    spouseId: string | null
    childId: string | null
    treeId: string | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    givenName: string | null
    surname: string | null
    gender: $Enums.Gender | null
    birthDate: Date | null
    birthPlace: string | null
    deathDate: Date | null
    deathPlace: string | null
    img: string | null
    spouseId: string | null
    childId: string | null
    treeId: string | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    name: number
    givenName: number
    surname: number
    gender: number
    birthDate: number
    birthPlace: number
    deathDate: number
    deathPlace: number
    img: number
    spouseId: number
    childId: number
    treeId: number
    _all: number
  }


  export type PersonMinAggregateInputType = {
    id?: true
    name?: true
    givenName?: true
    surname?: true
    gender?: true
    birthDate?: true
    birthPlace?: true
    deathDate?: true
    deathPlace?: true
    img?: true
    spouseId?: true
    childId?: true
    treeId?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    name?: true
    givenName?: true
    surname?: true
    gender?: true
    birthDate?: true
    birthPlace?: true
    deathDate?: true
    deathPlace?: true
    img?: true
    spouseId?: true
    childId?: true
    treeId?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    name?: true
    givenName?: true
    surname?: true
    gender?: true
    birthDate?: true
    birthPlace?: true
    deathDate?: true
    deathPlace?: true
    img?: true
    spouseId?: true
    childId?: true
    treeId?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: string
    name: string
    givenName: string | null
    surname: string | null
    gender: $Enums.Gender | null
    birthDate: Date | null
    birthPlace: string | null
    deathDate: Date | null
    deathPlace: string | null
    img: string | null
    spouseId: string | null
    childId: string | null
    treeId: string
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    givenName?: boolean
    surname?: boolean
    gender?: boolean
    birthDate?: boolean
    birthPlace?: boolean
    deathDate?: boolean
    deathPlace?: boolean
    img?: boolean
    spouseId?: boolean
    childId?: boolean
    treeId?: boolean
    spouse?: boolean | Person$spouseArgs<ExtArgs>
    spouseOf?: boolean | Person$spouseOfArgs<ExtArgs>
    child?: boolean | Person$childArgs<ExtArgs>
    parent?: boolean | Person$parentArgs<ExtArgs>
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    givenName?: boolean
    surname?: boolean
    gender?: boolean
    birthDate?: boolean
    birthPlace?: boolean
    deathDate?: boolean
    deathPlace?: boolean
    img?: boolean
    spouseId?: boolean
    childId?: boolean
    treeId?: boolean
    spouse?: boolean | Person$spouseArgs<ExtArgs>
    child?: boolean | Person$childArgs<ExtArgs>
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    givenName?: boolean
    surname?: boolean
    gender?: boolean
    birthDate?: boolean
    birthPlace?: boolean
    deathDate?: boolean
    deathPlace?: boolean
    img?: boolean
    spouseId?: boolean
    childId?: boolean
    treeId?: boolean
    spouse?: boolean | Person$spouseArgs<ExtArgs>
    child?: boolean | Person$childArgs<ExtArgs>
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    name?: boolean
    givenName?: boolean
    surname?: boolean
    gender?: boolean
    birthDate?: boolean
    birthPlace?: boolean
    deathDate?: boolean
    deathPlace?: boolean
    img?: boolean
    spouseId?: boolean
    childId?: boolean
    treeId?: boolean
  }

  export type PersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "givenName" | "surname" | "gender" | "birthDate" | "birthPlace" | "deathDate" | "deathPlace" | "img" | "spouseId" | "childId" | "treeId", ExtArgs["result"]["person"]>
  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spouse?: boolean | Person$spouseArgs<ExtArgs>
    spouseOf?: boolean | Person$spouseOfArgs<ExtArgs>
    child?: boolean | Person$childArgs<ExtArgs>
    parent?: boolean | Person$parentArgs<ExtArgs>
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }
  export type PersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spouse?: boolean | Person$spouseArgs<ExtArgs>
    child?: boolean | Person$childArgs<ExtArgs>
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }
  export type PersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spouse?: boolean | Person$spouseArgs<ExtArgs>
    child?: boolean | Person$childArgs<ExtArgs>
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }

  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      spouse: Prisma.$PersonPayload<ExtArgs> | null
      spouseOf: Prisma.$PersonPayload<ExtArgs> | null
      child: Prisma.$PersonPayload<ExtArgs> | null
      parent: Prisma.$PersonPayload<ExtArgs> | null
      tree: Prisma.$TreePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      givenName: string | null
      surname: string | null
      gender: $Enums.Gender | null
      birthDate: Date | null
      birthPlace: string | null
      deathDate: Date | null
      deathPlace: string | null
      img: string | null
      spouseId: string | null
      childId: string | null
      treeId: string
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonFindUniqueArgs>(args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonFindFirstArgs>(args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonFindManyArgs>(args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends PersonCreateArgs>(args: SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {PersonCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonCreateManyArgs>(args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {PersonCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `id`
     * const personWithIdOnly = await prisma.person.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends PersonDeleteArgs>(args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonUpdateArgs>(args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonDeleteManyArgs>(args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonUpdateManyArgs>(args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People and returns the data updated in the database.
     * @param {PersonUpdateManyAndReturnArgs} args - Arguments to update many People.
     * @example
     * // Update many People
     * const person = await prisma.person.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People and only return the `id`
     * const personWithIdOnly = await prisma.person.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends PersonUpsertArgs>(args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spouse<T extends Person$spouseArgs<ExtArgs> = {}>(args?: Subset<T, Person$spouseArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    spouseOf<T extends Person$spouseOfArgs<ExtArgs> = {}>(args?: Subset<T, Person$spouseOfArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    child<T extends Person$childArgs<ExtArgs> = {}>(args?: Subset<T, Person$childArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parent<T extends Person$parentArgs<ExtArgs> = {}>(args?: Subset<T, Person$parentArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tree<T extends TreeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TreeDefaultArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Person model
   */
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'String'>
    readonly name: FieldRef<"Person", 'String'>
    readonly givenName: FieldRef<"Person", 'String'>
    readonly surname: FieldRef<"Person", 'String'>
    readonly gender: FieldRef<"Person", 'Gender'>
    readonly birthDate: FieldRef<"Person", 'DateTime'>
    readonly birthPlace: FieldRef<"Person", 'String'>
    readonly deathDate: FieldRef<"Person", 'DateTime'>
    readonly deathPlace: FieldRef<"Person", 'String'>
    readonly img: FieldRef<"Person", 'String'>
    readonly spouseId: FieldRef<"Person", 'String'>
    readonly childId: FieldRef<"Person", 'String'>
    readonly treeId: FieldRef<"Person", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }

  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person createManyAndReturn
   */
  export type PersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person updateManyAndReturn
   */
  export type PersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }

  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to delete.
     */
    limit?: number
  }

  /**
   * Person.spouse
   */
  export type Person$spouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
  }

  /**
   * Person.spouseOf
   */
  export type Person$spouseOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
  }

  /**
   * Person.child
   */
  export type Person$childArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
  }

  /**
   * Person.parent
   */
  export type Person$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
  }

  /**
   * Person without action
   */
  export type PersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    login: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    login: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    login: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    login?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    login?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    login?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    login: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    login?: boolean
    password?: boolean
    trees?: boolean | User$treesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    login?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    login?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    login?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "login" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trees?: boolean | User$treesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      trees: Prisma.$TreePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      login: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trees<T extends User$treesArgs<ExtArgs> = {}>(args?: Subset<T, User$treesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly login: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.trees
   */
  export type User$treesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    where?: TreeWhereInput
    orderBy?: TreeOrderByWithRelationInput | TreeOrderByWithRelationInput[]
    cursor?: TreeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreeScalarFieldEnum | TreeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Tree
   */

  export type AggregateTree = {
    _count: TreeCountAggregateOutputType | null
    _min: TreeMinAggregateOutputType | null
    _max: TreeMaxAggregateOutputType | null
  }

  export type TreeMinAggregateOutputType = {
    id: string | null
    authorId: string | null
  }

  export type TreeMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
  }

  export type TreeCountAggregateOutputType = {
    id: number
    authorId: number
    _all: number
  }


  export type TreeMinAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type TreeMaxAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type TreeCountAggregateInputType = {
    id?: true
    authorId?: true
    _all?: true
  }

  export type TreeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tree to aggregate.
     */
    where?: TreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trees to fetch.
     */
    orderBy?: TreeOrderByWithRelationInput | TreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trees
    **/
    _count?: true | TreeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreeMaxAggregateInputType
  }

  export type GetTreeAggregateType<T extends TreeAggregateArgs> = {
        [P in keyof T & keyof AggregateTree]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTree[P]>
      : GetScalarType<T[P], AggregateTree[P]>
  }




  export type TreeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreeWhereInput
    orderBy?: TreeOrderByWithAggregationInput | TreeOrderByWithAggregationInput[]
    by: TreeScalarFieldEnum[] | TreeScalarFieldEnum
    having?: TreeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreeCountAggregateInputType | true
    _min?: TreeMinAggregateInputType
    _max?: TreeMaxAggregateInputType
  }

  export type TreeGroupByOutputType = {
    id: string
    authorId: string | null
    _count: TreeCountAggregateOutputType | null
    _min: TreeMinAggregateOutputType | null
    _max: TreeMaxAggregateOutputType | null
  }

  type GetTreeGroupByPayload<T extends TreeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreeGroupByOutputType[P]>
            : GetScalarType<T[P], TreeGroupByOutputType[P]>
        }
      >
    >


  export type TreeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    persons?: boolean | Tree$personsArgs<ExtArgs>
    author?: boolean | Tree$authorArgs<ExtArgs>
    _count?: boolean | TreeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tree"]>

  export type TreeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    author?: boolean | Tree$authorArgs<ExtArgs>
  }, ExtArgs["result"]["tree"]>

  export type TreeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    author?: boolean | Tree$authorArgs<ExtArgs>
  }, ExtArgs["result"]["tree"]>

  export type TreeSelectScalar = {
    id?: boolean
    authorId?: boolean
  }

  export type TreeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId", ExtArgs["result"]["tree"]>
  export type TreeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persons?: boolean | Tree$personsArgs<ExtArgs>
    author?: boolean | Tree$authorArgs<ExtArgs>
    _count?: boolean | TreeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TreeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Tree$authorArgs<ExtArgs>
  }
  export type TreeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Tree$authorArgs<ExtArgs>
  }

  export type $TreePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tree"
    objects: {
      persons: Prisma.$PersonPayload<ExtArgs>[]
      author: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string | null
    }, ExtArgs["result"]["tree"]>
    composites: {}
  }

  type TreeGetPayload<S extends boolean | null | undefined | TreeDefaultArgs> = $Result.GetResult<Prisma.$TreePayload, S>

  type TreeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreeCountAggregateInputType | true
    }

  export interface TreeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tree'], meta: { name: 'Tree' } }
    /**
     * Find zero or one Tree that matches the filter.
     * @param {TreeFindUniqueArgs} args - Arguments to find a Tree
     * @example
     * // Get one Tree
     * const tree = await prisma.tree.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreeFindUniqueArgs>(args: SelectSubset<T, TreeFindUniqueArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tree that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreeFindUniqueOrThrowArgs} args - Arguments to find a Tree
     * @example
     * // Get one Tree
     * const tree = await prisma.tree.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreeFindUniqueOrThrowArgs>(args: SelectSubset<T, TreeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tree that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeFindFirstArgs} args - Arguments to find a Tree
     * @example
     * // Get one Tree
     * const tree = await prisma.tree.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreeFindFirstArgs>(args?: SelectSubset<T, TreeFindFirstArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tree that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeFindFirstOrThrowArgs} args - Arguments to find a Tree
     * @example
     * // Get one Tree
     * const tree = await prisma.tree.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreeFindFirstOrThrowArgs>(args?: SelectSubset<T, TreeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trees
     * const trees = await prisma.tree.findMany()
     * 
     * // Get first 10 Trees
     * const trees = await prisma.tree.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treeWithIdOnly = await prisma.tree.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreeFindManyArgs>(args?: SelectSubset<T, TreeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tree.
     * @param {TreeCreateArgs} args - Arguments to create a Tree.
     * @example
     * // Create one Tree
     * const Tree = await prisma.tree.create({
     *   data: {
     *     // ... data to create a Tree
     *   }
     * })
     * 
     */
    create<T extends TreeCreateArgs>(args: SelectSubset<T, TreeCreateArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trees.
     * @param {TreeCreateManyArgs} args - Arguments to create many Trees.
     * @example
     * // Create many Trees
     * const tree = await prisma.tree.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreeCreateManyArgs>(args?: SelectSubset<T, TreeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trees and returns the data saved in the database.
     * @param {TreeCreateManyAndReturnArgs} args - Arguments to create many Trees.
     * @example
     * // Create many Trees
     * const tree = await prisma.tree.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trees and only return the `id`
     * const treeWithIdOnly = await prisma.tree.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreeCreateManyAndReturnArgs>(args?: SelectSubset<T, TreeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tree.
     * @param {TreeDeleteArgs} args - Arguments to delete one Tree.
     * @example
     * // Delete one Tree
     * const Tree = await prisma.tree.delete({
     *   where: {
     *     // ... filter to delete one Tree
     *   }
     * })
     * 
     */
    delete<T extends TreeDeleteArgs>(args: SelectSubset<T, TreeDeleteArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tree.
     * @param {TreeUpdateArgs} args - Arguments to update one Tree.
     * @example
     * // Update one Tree
     * const tree = await prisma.tree.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreeUpdateArgs>(args: SelectSubset<T, TreeUpdateArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trees.
     * @param {TreeDeleteManyArgs} args - Arguments to filter Trees to delete.
     * @example
     * // Delete a few Trees
     * const { count } = await prisma.tree.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreeDeleteManyArgs>(args?: SelectSubset<T, TreeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trees
     * const tree = await prisma.tree.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreeUpdateManyArgs>(args: SelectSubset<T, TreeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trees and returns the data updated in the database.
     * @param {TreeUpdateManyAndReturnArgs} args - Arguments to update many Trees.
     * @example
     * // Update many Trees
     * const tree = await prisma.tree.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trees and only return the `id`
     * const treeWithIdOnly = await prisma.tree.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TreeUpdateManyAndReturnArgs>(args: SelectSubset<T, TreeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tree.
     * @param {TreeUpsertArgs} args - Arguments to update or create a Tree.
     * @example
     * // Update or create a Tree
     * const tree = await prisma.tree.upsert({
     *   create: {
     *     // ... data to create a Tree
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tree we want to update
     *   }
     * })
     */
    upsert<T extends TreeUpsertArgs>(args: SelectSubset<T, TreeUpsertArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeCountArgs} args - Arguments to filter Trees to count.
     * @example
     * // Count the number of Trees
     * const count = await prisma.tree.count({
     *   where: {
     *     // ... the filter for the Trees we want to count
     *   }
     * })
    **/
    count<T extends TreeCountArgs>(
      args?: Subset<T, TreeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tree.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TreeAggregateArgs>(args: Subset<T, TreeAggregateArgs>): Prisma.PrismaPromise<GetTreeAggregateType<T>>

    /**
     * Group by Tree.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TreeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreeGroupByArgs['orderBy'] }
        : { orderBy?: TreeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TreeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tree model
   */
  readonly fields: TreeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tree.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    persons<T extends Tree$personsArgs<ExtArgs> = {}>(args?: Subset<T, Tree$personsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends Tree$authorArgs<ExtArgs> = {}>(args?: Subset<T, Tree$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tree model
   */
  interface TreeFieldRefs {
    readonly id: FieldRef<"Tree", 'String'>
    readonly authorId: FieldRef<"Tree", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tree findUnique
   */
  export type TreeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * Filter, which Tree to fetch.
     */
    where: TreeWhereUniqueInput
  }

  /**
   * Tree findUniqueOrThrow
   */
  export type TreeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * Filter, which Tree to fetch.
     */
    where: TreeWhereUniqueInput
  }

  /**
   * Tree findFirst
   */
  export type TreeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * Filter, which Tree to fetch.
     */
    where?: TreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trees to fetch.
     */
    orderBy?: TreeOrderByWithRelationInput | TreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trees.
     */
    cursor?: TreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trees.
     */
    distinct?: TreeScalarFieldEnum | TreeScalarFieldEnum[]
  }

  /**
   * Tree findFirstOrThrow
   */
  export type TreeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * Filter, which Tree to fetch.
     */
    where?: TreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trees to fetch.
     */
    orderBy?: TreeOrderByWithRelationInput | TreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trees.
     */
    cursor?: TreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trees.
     */
    distinct?: TreeScalarFieldEnum | TreeScalarFieldEnum[]
  }

  /**
   * Tree findMany
   */
  export type TreeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * Filter, which Trees to fetch.
     */
    where?: TreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trees to fetch.
     */
    orderBy?: TreeOrderByWithRelationInput | TreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trees.
     */
    cursor?: TreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trees.
     */
    skip?: number
    distinct?: TreeScalarFieldEnum | TreeScalarFieldEnum[]
  }

  /**
   * Tree create
   */
  export type TreeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * The data needed to create a Tree.
     */
    data?: XOR<TreeCreateInput, TreeUncheckedCreateInput>
  }

  /**
   * Tree createMany
   */
  export type TreeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trees.
     */
    data: TreeCreateManyInput | TreeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tree createManyAndReturn
   */
  export type TreeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * The data used to create many Trees.
     */
    data: TreeCreateManyInput | TreeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tree update
   */
  export type TreeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * The data needed to update a Tree.
     */
    data: XOR<TreeUpdateInput, TreeUncheckedUpdateInput>
    /**
     * Choose, which Tree to update.
     */
    where: TreeWhereUniqueInput
  }

  /**
   * Tree updateMany
   */
  export type TreeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trees.
     */
    data: XOR<TreeUpdateManyMutationInput, TreeUncheckedUpdateManyInput>
    /**
     * Filter which Trees to update
     */
    where?: TreeWhereInput
    /**
     * Limit how many Trees to update.
     */
    limit?: number
  }

  /**
   * Tree updateManyAndReturn
   */
  export type TreeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * The data used to update Trees.
     */
    data: XOR<TreeUpdateManyMutationInput, TreeUncheckedUpdateManyInput>
    /**
     * Filter which Trees to update
     */
    where?: TreeWhereInput
    /**
     * Limit how many Trees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tree upsert
   */
  export type TreeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * The filter to search for the Tree to update in case it exists.
     */
    where: TreeWhereUniqueInput
    /**
     * In case the Tree found by the `where` argument doesn't exist, create a new Tree with this data.
     */
    create: XOR<TreeCreateInput, TreeUncheckedCreateInput>
    /**
     * In case the Tree was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreeUpdateInput, TreeUncheckedUpdateInput>
  }

  /**
   * Tree delete
   */
  export type TreeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * Filter which Tree to delete.
     */
    where: TreeWhereUniqueInput
  }

  /**
   * Tree deleteMany
   */
  export type TreeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trees to delete
     */
    where?: TreeWhereInput
    /**
     * Limit how many Trees to delete.
     */
    limit?: number
  }

  /**
   * Tree.persons
   */
  export type Tree$personsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    cursor?: PersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Tree.author
   */
  export type Tree$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Tree without action
   */
  export type TreeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PersonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    givenName: 'givenName',
    surname: 'surname',
    gender: 'gender',
    birthDate: 'birthDate',
    birthPlace: 'birthPlace',
    deathDate: 'deathDate',
    deathPlace: 'deathPlace',
    img: 'img',
    spouseId: 'spouseId',
    childId: 'childId',
    treeId: 'treeId'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    login: 'login',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TreeScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId'
  };

  export type TreeScalarFieldEnum = (typeof TreeScalarFieldEnum)[keyof typeof TreeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: StringFilter<"Person"> | string
    name?: StringFilter<"Person"> | string
    givenName?: StringNullableFilter<"Person"> | string | null
    surname?: StringNullableFilter<"Person"> | string | null
    gender?: EnumGenderNullableFilter<"Person"> | $Enums.Gender | null
    birthDate?: DateTimeNullableFilter<"Person"> | Date | string | null
    birthPlace?: StringNullableFilter<"Person"> | string | null
    deathDate?: DateTimeNullableFilter<"Person"> | Date | string | null
    deathPlace?: StringNullableFilter<"Person"> | string | null
    img?: StringNullableFilter<"Person"> | string | null
    spouseId?: StringNullableFilter<"Person"> | string | null
    childId?: StringNullableFilter<"Person"> | string | null
    treeId?: StringFilter<"Person"> | string
    spouse?: XOR<PersonNullableScalarRelationFilter, PersonWhereInput> | null
    spouseOf?: XOR<PersonNullableScalarRelationFilter, PersonWhereInput> | null
    child?: XOR<PersonNullableScalarRelationFilter, PersonWhereInput> | null
    parent?: XOR<PersonNullableScalarRelationFilter, PersonWhereInput> | null
    tree?: XOR<TreeScalarRelationFilter, TreeWhereInput>
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    givenName?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    birthPlace?: SortOrderInput | SortOrder
    deathDate?: SortOrderInput | SortOrder
    deathPlace?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    spouseId?: SortOrderInput | SortOrder
    childId?: SortOrderInput | SortOrder
    treeId?: SortOrder
    spouse?: PersonOrderByWithRelationInput
    spouseOf?: PersonOrderByWithRelationInput
    child?: PersonOrderByWithRelationInput
    parent?: PersonOrderByWithRelationInput
    tree?: TreeOrderByWithRelationInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    spouseId?: string
    childId?: string
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    name?: StringFilter<"Person"> | string
    givenName?: StringNullableFilter<"Person"> | string | null
    surname?: StringNullableFilter<"Person"> | string | null
    gender?: EnumGenderNullableFilter<"Person"> | $Enums.Gender | null
    birthDate?: DateTimeNullableFilter<"Person"> | Date | string | null
    birthPlace?: StringNullableFilter<"Person"> | string | null
    deathDate?: DateTimeNullableFilter<"Person"> | Date | string | null
    deathPlace?: StringNullableFilter<"Person"> | string | null
    img?: StringNullableFilter<"Person"> | string | null
    treeId?: StringFilter<"Person"> | string
    spouse?: XOR<PersonNullableScalarRelationFilter, PersonWhereInput> | null
    spouseOf?: XOR<PersonNullableScalarRelationFilter, PersonWhereInput> | null
    child?: XOR<PersonNullableScalarRelationFilter, PersonWhereInput> | null
    parent?: XOR<PersonNullableScalarRelationFilter, PersonWhereInput> | null
    tree?: XOR<TreeScalarRelationFilter, TreeWhereInput>
  }, "id" | "spouseId" | "childId">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    givenName?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    birthPlace?: SortOrderInput | SortOrder
    deathDate?: SortOrderInput | SortOrder
    deathPlace?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    spouseId?: SortOrderInput | SortOrder
    childId?: SortOrderInput | SortOrder
    treeId?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Person"> | string
    name?: StringWithAggregatesFilter<"Person"> | string
    givenName?: StringNullableWithAggregatesFilter<"Person"> | string | null
    surname?: StringNullableWithAggregatesFilter<"Person"> | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"Person"> | $Enums.Gender | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Person"> | Date | string | null
    birthPlace?: StringNullableWithAggregatesFilter<"Person"> | string | null
    deathDate?: DateTimeNullableWithAggregatesFilter<"Person"> | Date | string | null
    deathPlace?: StringNullableWithAggregatesFilter<"Person"> | string | null
    img?: StringNullableWithAggregatesFilter<"Person"> | string | null
    spouseId?: StringNullableWithAggregatesFilter<"Person"> | string | null
    childId?: StringNullableWithAggregatesFilter<"Person"> | string | null
    treeId?: StringWithAggregatesFilter<"Person"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    login?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    trees?: TreeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    trees?: TreeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    login?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    trees?: TreeListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    login?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type TreeWhereInput = {
    AND?: TreeWhereInput | TreeWhereInput[]
    OR?: TreeWhereInput[]
    NOT?: TreeWhereInput | TreeWhereInput[]
    id?: StringFilter<"Tree"> | string
    authorId?: StringNullableFilter<"Tree"> | string | null
    persons?: PersonListRelationFilter
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TreeOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrderInput | SortOrder
    persons?: PersonOrderByRelationAggregateInput
    author?: UserOrderByWithRelationInput
  }

  export type TreeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TreeWhereInput | TreeWhereInput[]
    OR?: TreeWhereInput[]
    NOT?: TreeWhereInput | TreeWhereInput[]
    authorId?: StringNullableFilter<"Tree"> | string | null
    persons?: PersonListRelationFilter
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TreeOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrderInput | SortOrder
    _count?: TreeCountOrderByAggregateInput
    _max?: TreeMaxOrderByAggregateInput
    _min?: TreeMinOrderByAggregateInput
  }

  export type TreeScalarWhereWithAggregatesInput = {
    AND?: TreeScalarWhereWithAggregatesInput | TreeScalarWhereWithAggregatesInput[]
    OR?: TreeScalarWhereWithAggregatesInput[]
    NOT?: TreeScalarWhereWithAggregatesInput | TreeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tree"> | string
    authorId?: StringNullableWithAggregatesFilter<"Tree"> | string | null
  }

  export type PersonCreateInput = {
    id?: string
    name: string
    givenName?: string | null
    surname?: string | null
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    birthPlace?: string | null
    deathDate?: Date | string | null
    deathPlace?: string | null
    img?: string | null
    spouse?: PersonCreateNestedOneWithoutSpouseOfInput
    spouseOf?: PersonCreateNestedOneWithoutSpouseInput
    child?: PersonCreateNestedOneWithoutParentInput
    parent?: PersonCreateNestedOneWithoutChildInput
    tree: TreeCreateNestedOneWithoutPersonsInput
  }

  export type PersonUncheckedCreateInput = {
    id?: string
    name: string
    givenName?: string | null
    surname?: string | null
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    birthPlace?: string | null
    deathDate?: Date | string | null
    deathPlace?: string | null
    img?: string | null
    spouseId?: string | null
    childId?: string | null
    treeId: string
    spouseOf?: PersonUncheckedCreateNestedOneWithoutSpouseInput
    parent?: PersonUncheckedCreateNestedOneWithoutChildInput
  }

  export type PersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathPlace?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    spouse?: PersonUpdateOneWithoutSpouseOfNestedInput
    spouseOf?: PersonUpdateOneWithoutSpouseNestedInput
    child?: PersonUpdateOneWithoutParentNestedInput
    parent?: PersonUpdateOneWithoutChildNestedInput
    tree?: TreeUpdateOneRequiredWithoutPersonsNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathPlace?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    spouseId?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: NullableStringFieldUpdateOperationsInput | string | null
    treeId?: StringFieldUpdateOperationsInput | string
    spouseOf?: PersonUncheckedUpdateOneWithoutSpouseNestedInput
    parent?: PersonUncheckedUpdateOneWithoutChildNestedInput
  }

  export type PersonCreateManyInput = {
    id?: string
    name: string
    givenName?: string | null
    surname?: string | null
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    birthPlace?: string | null
    deathDate?: Date | string | null
    deathPlace?: string | null
    img?: string | null
    spouseId?: string | null
    childId?: string | null
    treeId: string
  }

  export type PersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathPlace?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathPlace?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    spouseId?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: NullableStringFieldUpdateOperationsInput | string | null
    treeId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    login: string
    password: string
    trees?: TreeCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    login: string
    password: string
    trees?: TreeUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    trees?: TreeUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    trees?: TreeUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    login: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TreeCreateInput = {
    id?: string
    persons?: PersonCreateNestedManyWithoutTreeInput
    author?: UserCreateNestedOneWithoutTreesInput
  }

  export type TreeUncheckedCreateInput = {
    id?: string
    authorId?: string | null
    persons?: PersonUncheckedCreateNestedManyWithoutTreeInput
  }

  export type TreeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    persons?: PersonUpdateManyWithoutTreeNestedInput
    author?: UserUpdateOneWithoutTreesNestedInput
  }

  export type TreeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    persons?: PersonUncheckedUpdateManyWithoutTreeNestedInput
  }

  export type TreeCreateManyInput = {
    id?: string
    authorId?: string | null
  }

  export type TreeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TreeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PersonNullableScalarRelationFilter = {
    is?: PersonWhereInput | null
    isNot?: PersonWhereInput | null
  }

  export type TreeScalarRelationFilter = {
    is?: TreeWhereInput
    isNot?: TreeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    givenName?: SortOrder
    surname?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    birthPlace?: SortOrder
    deathDate?: SortOrder
    deathPlace?: SortOrder
    img?: SortOrder
    spouseId?: SortOrder
    childId?: SortOrder
    treeId?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    givenName?: SortOrder
    surname?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    birthPlace?: SortOrder
    deathDate?: SortOrder
    deathPlace?: SortOrder
    img?: SortOrder
    spouseId?: SortOrder
    childId?: SortOrder
    treeId?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    givenName?: SortOrder
    surname?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    birthPlace?: SortOrder
    deathDate?: SortOrder
    deathPlace?: SortOrder
    img?: SortOrder
    spouseId?: SortOrder
    childId?: SortOrder
    treeId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TreeListRelationFilter = {
    every?: TreeWhereInput
    some?: TreeWhereInput
    none?: TreeWhereInput
  }

  export type TreeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    password?: SortOrder
  }

  export type PersonListRelationFilter = {
    every?: PersonWhereInput
    some?: PersonWhereInput
    none?: PersonWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PersonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TreeCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type TreeMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type TreeMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type PersonCreateNestedOneWithoutSpouseOfInput = {
    create?: XOR<PersonCreateWithoutSpouseOfInput, PersonUncheckedCreateWithoutSpouseOfInput>
    connectOrCreate?: PersonCreateOrConnectWithoutSpouseOfInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutSpouseInput = {
    create?: XOR<PersonCreateWithoutSpouseInput, PersonUncheckedCreateWithoutSpouseInput>
    connectOrCreate?: PersonCreateOrConnectWithoutSpouseInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutParentInput = {
    create?: XOR<PersonCreateWithoutParentInput, PersonUncheckedCreateWithoutParentInput>
    connectOrCreate?: PersonCreateOrConnectWithoutParentInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutChildInput = {
    create?: XOR<PersonCreateWithoutChildInput, PersonUncheckedCreateWithoutChildInput>
    connectOrCreate?: PersonCreateOrConnectWithoutChildInput
    connect?: PersonWhereUniqueInput
  }

  export type TreeCreateNestedOneWithoutPersonsInput = {
    create?: XOR<TreeCreateWithoutPersonsInput, TreeUncheckedCreateWithoutPersonsInput>
    connectOrCreate?: TreeCreateOrConnectWithoutPersonsInput
    connect?: TreeWhereUniqueInput
  }

  export type PersonUncheckedCreateNestedOneWithoutSpouseInput = {
    create?: XOR<PersonCreateWithoutSpouseInput, PersonUncheckedCreateWithoutSpouseInput>
    connectOrCreate?: PersonCreateOrConnectWithoutSpouseInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUncheckedCreateNestedOneWithoutChildInput = {
    create?: XOR<PersonCreateWithoutChildInput, PersonUncheckedCreateWithoutChildInput>
    connectOrCreate?: PersonCreateOrConnectWithoutChildInput
    connect?: PersonWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PersonUpdateOneWithoutSpouseOfNestedInput = {
    create?: XOR<PersonCreateWithoutSpouseOfInput, PersonUncheckedCreateWithoutSpouseOfInput>
    connectOrCreate?: PersonCreateOrConnectWithoutSpouseOfInput
    upsert?: PersonUpsertWithoutSpouseOfInput
    disconnect?: PersonWhereInput | boolean
    delete?: PersonWhereInput | boolean
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutSpouseOfInput, PersonUpdateWithoutSpouseOfInput>, PersonUncheckedUpdateWithoutSpouseOfInput>
  }

  export type PersonUpdateOneWithoutSpouseNestedInput = {
    create?: XOR<PersonCreateWithoutSpouseInput, PersonUncheckedCreateWithoutSpouseInput>
    connectOrCreate?: PersonCreateOrConnectWithoutSpouseInput
    upsert?: PersonUpsertWithoutSpouseInput
    disconnect?: PersonWhereInput | boolean
    delete?: PersonWhereInput | boolean
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutSpouseInput, PersonUpdateWithoutSpouseInput>, PersonUncheckedUpdateWithoutSpouseInput>
  }

  export type PersonUpdateOneWithoutParentNestedInput = {
    create?: XOR<PersonCreateWithoutParentInput, PersonUncheckedCreateWithoutParentInput>
    connectOrCreate?: PersonCreateOrConnectWithoutParentInput
    upsert?: PersonUpsertWithoutParentInput
    disconnect?: PersonWhereInput | boolean
    delete?: PersonWhereInput | boolean
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutParentInput, PersonUpdateWithoutParentInput>, PersonUncheckedUpdateWithoutParentInput>
  }

  export type PersonUpdateOneWithoutChildNestedInput = {
    create?: XOR<PersonCreateWithoutChildInput, PersonUncheckedCreateWithoutChildInput>
    connectOrCreate?: PersonCreateOrConnectWithoutChildInput
    upsert?: PersonUpsertWithoutChildInput
    disconnect?: PersonWhereInput | boolean
    delete?: PersonWhereInput | boolean
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutChildInput, PersonUpdateWithoutChildInput>, PersonUncheckedUpdateWithoutChildInput>
  }

  export type TreeUpdateOneRequiredWithoutPersonsNestedInput = {
    create?: XOR<TreeCreateWithoutPersonsInput, TreeUncheckedCreateWithoutPersonsInput>
    connectOrCreate?: TreeCreateOrConnectWithoutPersonsInput
    upsert?: TreeUpsertWithoutPersonsInput
    connect?: TreeWhereUniqueInput
    update?: XOR<XOR<TreeUpdateToOneWithWhereWithoutPersonsInput, TreeUpdateWithoutPersonsInput>, TreeUncheckedUpdateWithoutPersonsInput>
  }

  export type PersonUncheckedUpdateOneWithoutSpouseNestedInput = {
    create?: XOR<PersonCreateWithoutSpouseInput, PersonUncheckedCreateWithoutSpouseInput>
    connectOrCreate?: PersonCreateOrConnectWithoutSpouseInput
    upsert?: PersonUpsertWithoutSpouseInput
    disconnect?: PersonWhereInput | boolean
    delete?: PersonWhereInput | boolean
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutSpouseInput, PersonUpdateWithoutSpouseInput>, PersonUncheckedUpdateWithoutSpouseInput>
  }

  export type PersonUncheckedUpdateOneWithoutChildNestedInput = {
    create?: XOR<PersonCreateWithoutChildInput, PersonUncheckedCreateWithoutChildInput>
    connectOrCreate?: PersonCreateOrConnectWithoutChildInput
    upsert?: PersonUpsertWithoutChildInput
    disconnect?: PersonWhereInput | boolean
    delete?: PersonWhereInput | boolean
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutChildInput, PersonUpdateWithoutChildInput>, PersonUncheckedUpdateWithoutChildInput>
  }

  export type TreeCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TreeCreateWithoutAuthorInput, TreeUncheckedCreateWithoutAuthorInput> | TreeCreateWithoutAuthorInput[] | TreeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TreeCreateOrConnectWithoutAuthorInput | TreeCreateOrConnectWithoutAuthorInput[]
    createMany?: TreeCreateManyAuthorInputEnvelope
    connect?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
  }

  export type TreeUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TreeCreateWithoutAuthorInput, TreeUncheckedCreateWithoutAuthorInput> | TreeCreateWithoutAuthorInput[] | TreeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TreeCreateOrConnectWithoutAuthorInput | TreeCreateOrConnectWithoutAuthorInput[]
    createMany?: TreeCreateManyAuthorInputEnvelope
    connect?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
  }

  export type TreeUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TreeCreateWithoutAuthorInput, TreeUncheckedCreateWithoutAuthorInput> | TreeCreateWithoutAuthorInput[] | TreeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TreeCreateOrConnectWithoutAuthorInput | TreeCreateOrConnectWithoutAuthorInput[]
    upsert?: TreeUpsertWithWhereUniqueWithoutAuthorInput | TreeUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TreeCreateManyAuthorInputEnvelope
    set?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
    disconnect?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
    delete?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
    connect?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
    update?: TreeUpdateWithWhereUniqueWithoutAuthorInput | TreeUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TreeUpdateManyWithWhereWithoutAuthorInput | TreeUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TreeScalarWhereInput | TreeScalarWhereInput[]
  }

  export type TreeUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TreeCreateWithoutAuthorInput, TreeUncheckedCreateWithoutAuthorInput> | TreeCreateWithoutAuthorInput[] | TreeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TreeCreateOrConnectWithoutAuthorInput | TreeCreateOrConnectWithoutAuthorInput[]
    upsert?: TreeUpsertWithWhereUniqueWithoutAuthorInput | TreeUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TreeCreateManyAuthorInputEnvelope
    set?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
    disconnect?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
    delete?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
    connect?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
    update?: TreeUpdateWithWhereUniqueWithoutAuthorInput | TreeUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TreeUpdateManyWithWhereWithoutAuthorInput | TreeUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TreeScalarWhereInput | TreeScalarWhereInput[]
  }

  export type PersonCreateNestedManyWithoutTreeInput = {
    create?: XOR<PersonCreateWithoutTreeInput, PersonUncheckedCreateWithoutTreeInput> | PersonCreateWithoutTreeInput[] | PersonUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutTreeInput | PersonCreateOrConnectWithoutTreeInput[]
    createMany?: PersonCreateManyTreeInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTreesInput = {
    create?: XOR<UserCreateWithoutTreesInput, UserUncheckedCreateWithoutTreesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTreesInput
    connect?: UserWhereUniqueInput
  }

  export type PersonUncheckedCreateNestedManyWithoutTreeInput = {
    create?: XOR<PersonCreateWithoutTreeInput, PersonUncheckedCreateWithoutTreeInput> | PersonCreateWithoutTreeInput[] | PersonUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutTreeInput | PersonCreateOrConnectWithoutTreeInput[]
    createMany?: PersonCreateManyTreeInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type PersonUpdateManyWithoutTreeNestedInput = {
    create?: XOR<PersonCreateWithoutTreeInput, PersonUncheckedCreateWithoutTreeInput> | PersonCreateWithoutTreeInput[] | PersonUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutTreeInput | PersonCreateOrConnectWithoutTreeInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutTreeInput | PersonUpsertWithWhereUniqueWithoutTreeInput[]
    createMany?: PersonCreateManyTreeInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutTreeInput | PersonUpdateWithWhereUniqueWithoutTreeInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutTreeInput | PersonUpdateManyWithWhereWithoutTreeInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type UserUpdateOneWithoutTreesNestedInput = {
    create?: XOR<UserCreateWithoutTreesInput, UserUncheckedCreateWithoutTreesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTreesInput
    upsert?: UserUpsertWithoutTreesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTreesInput, UserUpdateWithoutTreesInput>, UserUncheckedUpdateWithoutTreesInput>
  }

  export type PersonUncheckedUpdateManyWithoutTreeNestedInput = {
    create?: XOR<PersonCreateWithoutTreeInput, PersonUncheckedCreateWithoutTreeInput> | PersonCreateWithoutTreeInput[] | PersonUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutTreeInput | PersonCreateOrConnectWithoutTreeInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutTreeInput | PersonUpsertWithWhereUniqueWithoutTreeInput[]
    createMany?: PersonCreateManyTreeInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutTreeInput | PersonUpdateWithWhereUniqueWithoutTreeInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutTreeInput | PersonUpdateManyWithWhereWithoutTreeInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PersonCreateWithoutSpouseOfInput = {
    id?: string
    name: string
    givenName?: string | null
    surname?: string | null
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    birthPlace?: string | null
    deathDate?: Date | string | null
    deathPlace?: string | null
    img?: string | null
    spouse?: PersonCreateNestedOneWithoutSpouseOfInput
    child?: PersonCreateNestedOneWithoutParentInput
    parent?: PersonCreateNestedOneWithoutChildInput
    tree: TreeCreateNestedOneWithoutPersonsInput
  }

  export type PersonUncheckedCreateWithoutSpouseOfInput = {
    id?: string
    name: string
    givenName?: string | null
    surname?: string | null
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    birthPlace?: string | null
    deathDate?: Date | string | null
    deathPlace?: string | null
    img?: string | null
    spouseId?: string | null
    childId?: string | null
    treeId: string
    parent?: PersonUncheckedCreateNestedOneWithoutChildInput
  }

  export type PersonCreateOrConnectWithoutSpouseOfInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutSpouseOfInput, PersonUncheckedCreateWithoutSpouseOfInput>
  }

  export type PersonCreateWithoutSpouseInput = {
    id?: string
    name: string
    givenName?: string | null
    surname?: string | null
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    birthPlace?: string | null
    deathDate?: Date | string | null
    deathPlace?: string | null
    img?: string | null
    spouseOf?: PersonCreateNestedOneWithoutSpouseInput
    child?: PersonCreateNestedOneWithoutParentInput
    parent?: PersonCreateNestedOneWithoutChildInput
    tree: TreeCreateNestedOneWithoutPersonsInput
  }

  export type PersonUncheckedCreateWithoutSpouseInput = {
    id?: string
    name: string
    givenName?: string | null
    surname?: string | null
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    birthPlace?: string | null
    deathDate?: Date | string | null
    deathPlace?: string | null
    img?: string | null
    childId?: string | null
    treeId: string
    spouseOf?: PersonUncheckedCreateNestedOneWithoutSpouseInput
    parent?: PersonUncheckedCreateNestedOneWithoutChildInput
  }

  export type PersonCreateOrConnectWithoutSpouseInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutSpouseInput, PersonUncheckedCreateWithoutSpouseInput>
  }

  export type PersonCreateWithoutParentInput = {
    id?: string
    name: string
    givenName?: string | null
    surname?: string | null
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    birthPlace?: string | null
    deathDate?: Date | string | null
    deathPlace?: string | null
    img?: string | null
    spouse?: PersonCreateNestedOneWithoutSpouseOfInput
    spouseOf?: PersonCreateNestedOneWithoutSpouseInput
    child?: PersonCreateNestedOneWithoutParentInput
    tree: TreeCreateNestedOneWithoutPersonsInput
  }

  export type PersonUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    givenName?: string | null
    surname?: string | null
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    birthPlace?: string | null
    deathDate?: Date | string | null
    deathPlace?: string | null
    img?: string | null
    spouseId?: string | null
    childId?: string | null
    treeId: string
    spouseOf?: PersonUncheckedCreateNestedOneWithoutSpouseInput
  }

  export type PersonCreateOrConnectWithoutParentInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutParentInput, PersonUncheckedCreateWithoutParentInput>
  }

  export type PersonCreateWithoutChildInput = {
    id?: string
    name: string
    givenName?: string | null
    surname?: string | null
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    birthPlace?: string | null
    deathDate?: Date | string | null
    deathPlace?: string | null
    img?: string | null
    spouse?: PersonCreateNestedOneWithoutSpouseOfInput
    spouseOf?: PersonCreateNestedOneWithoutSpouseInput
    parent?: PersonCreateNestedOneWithoutChildInput
    tree: TreeCreateNestedOneWithoutPersonsInput
  }

  export type PersonUncheckedCreateWithoutChildInput = {
    id?: string
    name: string
    givenName?: string | null
    surname?: string | null
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    birthPlace?: string | null
    deathDate?: Date | string | null
    deathPlace?: string | null
    img?: string | null
    spouseId?: string | null
    treeId: string
    spouseOf?: PersonUncheckedCreateNestedOneWithoutSpouseInput
    parent?: PersonUncheckedCreateNestedOneWithoutChildInput
  }

  export type PersonCreateOrConnectWithoutChildInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutChildInput, PersonUncheckedCreateWithoutChildInput>
  }

  export type TreeCreateWithoutPersonsInput = {
    id?: string
    author?: UserCreateNestedOneWithoutTreesInput
  }

  export type TreeUncheckedCreateWithoutPersonsInput = {
    id?: string
    authorId?: string | null
  }

  export type TreeCreateOrConnectWithoutPersonsInput = {
    where: TreeWhereUniqueInput
    create: XOR<TreeCreateWithoutPersonsInput, TreeUncheckedCreateWithoutPersonsInput>
  }

  export type PersonUpsertWithoutSpouseOfInput = {
    update: XOR<PersonUpdateWithoutSpouseOfInput, PersonUncheckedUpdateWithoutSpouseOfInput>
    create: XOR<PersonCreateWithoutSpouseOfInput, PersonUncheckedCreateWithoutSpouseOfInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutSpouseOfInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutSpouseOfInput, PersonUncheckedUpdateWithoutSpouseOfInput>
  }

  export type PersonUpdateWithoutSpouseOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathPlace?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    spouse?: PersonUpdateOneWithoutSpouseOfNestedInput
    child?: PersonUpdateOneWithoutParentNestedInput
    parent?: PersonUpdateOneWithoutChildNestedInput
    tree?: TreeUpdateOneRequiredWithoutPersonsNestedInput
  }

  export type PersonUncheckedUpdateWithoutSpouseOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathPlace?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    spouseId?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: NullableStringFieldUpdateOperationsInput | string | null
    treeId?: StringFieldUpdateOperationsInput | string
    parent?: PersonUncheckedUpdateOneWithoutChildNestedInput
  }

  export type PersonUpsertWithoutSpouseInput = {
    update: XOR<PersonUpdateWithoutSpouseInput, PersonUncheckedUpdateWithoutSpouseInput>
    create: XOR<PersonCreateWithoutSpouseInput, PersonUncheckedCreateWithoutSpouseInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutSpouseInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutSpouseInput, PersonUncheckedUpdateWithoutSpouseInput>
  }

  export type PersonUpdateWithoutSpouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathPlace?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    spouseOf?: PersonUpdateOneWithoutSpouseNestedInput
    child?: PersonUpdateOneWithoutParentNestedInput
    parent?: PersonUpdateOneWithoutChildNestedInput
    tree?: TreeUpdateOneRequiredWithoutPersonsNestedInput
  }

  export type PersonUncheckedUpdateWithoutSpouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathPlace?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: NullableStringFieldUpdateOperationsInput | string | null
    treeId?: StringFieldUpdateOperationsInput | string
    spouseOf?: PersonUncheckedUpdateOneWithoutSpouseNestedInput
    parent?: PersonUncheckedUpdateOneWithoutChildNestedInput
  }

  export type PersonUpsertWithoutParentInput = {
    update: XOR<PersonUpdateWithoutParentInput, PersonUncheckedUpdateWithoutParentInput>
    create: XOR<PersonCreateWithoutParentInput, PersonUncheckedCreateWithoutParentInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutParentInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutParentInput, PersonUncheckedUpdateWithoutParentInput>
  }

  export type PersonUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathPlace?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    spouse?: PersonUpdateOneWithoutSpouseOfNestedInput
    spouseOf?: PersonUpdateOneWithoutSpouseNestedInput
    child?: PersonUpdateOneWithoutParentNestedInput
    tree?: TreeUpdateOneRequiredWithoutPersonsNestedInput
  }

  export type PersonUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathPlace?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    spouseId?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: NullableStringFieldUpdateOperationsInput | string | null
    treeId?: StringFieldUpdateOperationsInput | string
    spouseOf?: PersonUncheckedUpdateOneWithoutSpouseNestedInput
  }

  export type PersonUpsertWithoutChildInput = {
    update: XOR<PersonUpdateWithoutChildInput, PersonUncheckedUpdateWithoutChildInput>
    create: XOR<PersonCreateWithoutChildInput, PersonUncheckedCreateWithoutChildInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutChildInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutChildInput, PersonUncheckedUpdateWithoutChildInput>
  }

  export type PersonUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathPlace?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    spouse?: PersonUpdateOneWithoutSpouseOfNestedInput
    spouseOf?: PersonUpdateOneWithoutSpouseNestedInput
    parent?: PersonUpdateOneWithoutChildNestedInput
    tree?: TreeUpdateOneRequiredWithoutPersonsNestedInput
  }

  export type PersonUncheckedUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathPlace?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    spouseId?: NullableStringFieldUpdateOperationsInput | string | null
    treeId?: StringFieldUpdateOperationsInput | string
    spouseOf?: PersonUncheckedUpdateOneWithoutSpouseNestedInput
    parent?: PersonUncheckedUpdateOneWithoutChildNestedInput
  }

  export type TreeUpsertWithoutPersonsInput = {
    update: XOR<TreeUpdateWithoutPersonsInput, TreeUncheckedUpdateWithoutPersonsInput>
    create: XOR<TreeCreateWithoutPersonsInput, TreeUncheckedCreateWithoutPersonsInput>
    where?: TreeWhereInput
  }

  export type TreeUpdateToOneWithWhereWithoutPersonsInput = {
    where?: TreeWhereInput
    data: XOR<TreeUpdateWithoutPersonsInput, TreeUncheckedUpdateWithoutPersonsInput>
  }

  export type TreeUpdateWithoutPersonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneWithoutTreesNestedInput
  }

  export type TreeUncheckedUpdateWithoutPersonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TreeCreateWithoutAuthorInput = {
    id?: string
    persons?: PersonCreateNestedManyWithoutTreeInput
  }

  export type TreeUncheckedCreateWithoutAuthorInput = {
    id?: string
    persons?: PersonUncheckedCreateNestedManyWithoutTreeInput
  }

  export type TreeCreateOrConnectWithoutAuthorInput = {
    where: TreeWhereUniqueInput
    create: XOR<TreeCreateWithoutAuthorInput, TreeUncheckedCreateWithoutAuthorInput>
  }

  export type TreeCreateManyAuthorInputEnvelope = {
    data: TreeCreateManyAuthorInput | TreeCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type TreeUpsertWithWhereUniqueWithoutAuthorInput = {
    where: TreeWhereUniqueInput
    update: XOR<TreeUpdateWithoutAuthorInput, TreeUncheckedUpdateWithoutAuthorInput>
    create: XOR<TreeCreateWithoutAuthorInput, TreeUncheckedCreateWithoutAuthorInput>
  }

  export type TreeUpdateWithWhereUniqueWithoutAuthorInput = {
    where: TreeWhereUniqueInput
    data: XOR<TreeUpdateWithoutAuthorInput, TreeUncheckedUpdateWithoutAuthorInput>
  }

  export type TreeUpdateManyWithWhereWithoutAuthorInput = {
    where: TreeScalarWhereInput
    data: XOR<TreeUpdateManyMutationInput, TreeUncheckedUpdateManyWithoutAuthorInput>
  }

  export type TreeScalarWhereInput = {
    AND?: TreeScalarWhereInput | TreeScalarWhereInput[]
    OR?: TreeScalarWhereInput[]
    NOT?: TreeScalarWhereInput | TreeScalarWhereInput[]
    id?: StringFilter<"Tree"> | string
    authorId?: StringNullableFilter<"Tree"> | string | null
  }

  export type PersonCreateWithoutTreeInput = {
    id?: string
    name: string
    givenName?: string | null
    surname?: string | null
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    birthPlace?: string | null
    deathDate?: Date | string | null
    deathPlace?: string | null
    img?: string | null
    spouse?: PersonCreateNestedOneWithoutSpouseOfInput
    spouseOf?: PersonCreateNestedOneWithoutSpouseInput
    child?: PersonCreateNestedOneWithoutParentInput
    parent?: PersonCreateNestedOneWithoutChildInput
  }

  export type PersonUncheckedCreateWithoutTreeInput = {
    id?: string
    name: string
    givenName?: string | null
    surname?: string | null
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    birthPlace?: string | null
    deathDate?: Date | string | null
    deathPlace?: string | null
    img?: string | null
    spouseId?: string | null
    childId?: string | null
    spouseOf?: PersonUncheckedCreateNestedOneWithoutSpouseInput
    parent?: PersonUncheckedCreateNestedOneWithoutChildInput
  }

  export type PersonCreateOrConnectWithoutTreeInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutTreeInput, PersonUncheckedCreateWithoutTreeInput>
  }

  export type PersonCreateManyTreeInputEnvelope = {
    data: PersonCreateManyTreeInput | PersonCreateManyTreeInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTreesInput = {
    id?: string
    login: string
    password: string
  }

  export type UserUncheckedCreateWithoutTreesInput = {
    id?: string
    login: string
    password: string
  }

  export type UserCreateOrConnectWithoutTreesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTreesInput, UserUncheckedCreateWithoutTreesInput>
  }

  export type PersonUpsertWithWhereUniqueWithoutTreeInput = {
    where: PersonWhereUniqueInput
    update: XOR<PersonUpdateWithoutTreeInput, PersonUncheckedUpdateWithoutTreeInput>
    create: XOR<PersonCreateWithoutTreeInput, PersonUncheckedCreateWithoutTreeInput>
  }

  export type PersonUpdateWithWhereUniqueWithoutTreeInput = {
    where: PersonWhereUniqueInput
    data: XOR<PersonUpdateWithoutTreeInput, PersonUncheckedUpdateWithoutTreeInput>
  }

  export type PersonUpdateManyWithWhereWithoutTreeInput = {
    where: PersonScalarWhereInput
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyWithoutTreeInput>
  }

  export type PersonScalarWhereInput = {
    AND?: PersonScalarWhereInput | PersonScalarWhereInput[]
    OR?: PersonScalarWhereInput[]
    NOT?: PersonScalarWhereInput | PersonScalarWhereInput[]
    id?: StringFilter<"Person"> | string
    name?: StringFilter<"Person"> | string
    givenName?: StringNullableFilter<"Person"> | string | null
    surname?: StringNullableFilter<"Person"> | string | null
    gender?: EnumGenderNullableFilter<"Person"> | $Enums.Gender | null
    birthDate?: DateTimeNullableFilter<"Person"> | Date | string | null
    birthPlace?: StringNullableFilter<"Person"> | string | null
    deathDate?: DateTimeNullableFilter<"Person"> | Date | string | null
    deathPlace?: StringNullableFilter<"Person"> | string | null
    img?: StringNullableFilter<"Person"> | string | null
    spouseId?: StringNullableFilter<"Person"> | string | null
    childId?: StringNullableFilter<"Person"> | string | null
    treeId?: StringFilter<"Person"> | string
  }

  export type UserUpsertWithoutTreesInput = {
    update: XOR<UserUpdateWithoutTreesInput, UserUncheckedUpdateWithoutTreesInput>
    create: XOR<UserCreateWithoutTreesInput, UserUncheckedCreateWithoutTreesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTreesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTreesInput, UserUncheckedUpdateWithoutTreesInput>
  }

  export type UserUpdateWithoutTreesInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutTreesInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TreeCreateManyAuthorInput = {
    id?: string
  }

  export type TreeUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    persons?: PersonUpdateManyWithoutTreeNestedInput
  }

  export type TreeUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    persons?: PersonUncheckedUpdateManyWithoutTreeNestedInput
  }

  export type TreeUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PersonCreateManyTreeInput = {
    id?: string
    name: string
    givenName?: string | null
    surname?: string | null
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    birthPlace?: string | null
    deathDate?: Date | string | null
    deathPlace?: string | null
    img?: string | null
    spouseId?: string | null
    childId?: string | null
  }

  export type PersonUpdateWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathPlace?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    spouse?: PersonUpdateOneWithoutSpouseOfNestedInput
    spouseOf?: PersonUpdateOneWithoutSpouseNestedInput
    child?: PersonUpdateOneWithoutParentNestedInput
    parent?: PersonUpdateOneWithoutChildNestedInput
  }

  export type PersonUncheckedUpdateWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathPlace?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    spouseId?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: NullableStringFieldUpdateOperationsInput | string | null
    spouseOf?: PersonUncheckedUpdateOneWithoutSpouseNestedInput
    parent?: PersonUncheckedUpdateOneWithoutChildNestedInput
  }

  export type PersonUncheckedUpdateManyWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthPlace?: NullableStringFieldUpdateOperationsInput | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathPlace?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    spouseId?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}