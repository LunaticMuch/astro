import type {
	BooleanColumnInput,
	ColumnsConfig,
	DBConfigInput,
	DateColumnInput,
	JsonColumnInput,
	NumberColumnOpts,
	TableConfig,
	TextColumnOpts,
} from '../core/types.js';

function createColumn<S extends string, T extends Record<string, unknown>>(type: S, schema: T) {
	return {
		type,
		/**
		 * @internal
		 */
		schema,
	};
}

export const column = {
	number: <T extends NumberColumnOpts>(opts: T = {} as T) => {
		return createColumn('number', opts) satisfies { type: 'number' };
	},
	boolean: <T extends BooleanColumnInput['schema']>(opts: T = {} as T) => {
		return createColumn('boolean', opts) satisfies { type: 'boolean' };
	},
	text: <T extends TextColumnOpts>(opts: T = {} as T) => {
		return createColumn('text', opts) satisfies { type: 'text' };
	},
	date<T extends DateColumnInput['schema']>(opts: T = {} as T) {
		return createColumn('date', opts) satisfies { type: 'date' };
	},
	json<T extends JsonColumnInput['schema']>(opts: T = {} as T) {
		return createColumn('json', opts) satisfies { type: 'json' };
	},
};

export function defineTable<TColumns extends ColumnsConfig>(userConfig: TableConfig<TColumns>) {
	return userConfig;
}

export function defineDb(userConfig: DBConfigInput) {
	return userConfig;
}

export { NOW, TRUE, FALSE } from './index.js';

export {
	sql,
	eq,
	gt,
	gte,
	lt,
	lte,
	ne,
	isNull,
	isNotNull,
	inArray,
	notInArray,
	exists,
	notExists,
	between,
	notBetween,
	like,
	notIlike,
	not,
	asc,
	desc,
	and,
	or,
} from 'drizzle-orm';