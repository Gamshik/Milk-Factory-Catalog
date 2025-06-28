export abstract class BasePrismaRepository <
    TModel,
    TFindUniqueArgs,
    TFindManyArgs,
    TCreateArgs,
    TUpdateArgs,
    TDeleteArgs
> {
    protected abstract readonly model: {
        findUnique (args: TFindUniqueArgs): Promise<TModel | null>;
        findMany (args: TFindManyArgs): Promise<TModel[]>;
        create (args: TCreateArgs): Promise<TModel>;
        delete (args: TDeleteArgs): Promise<void>;
        update (args: TUpdateArgs): Promise<TModel>;
    };

 
    async findUnique (args: TFindUniqueArgs): Promise<TModel | null> {
        return this.model.findUnique(args);
    }

    async findMany (args: TFindManyArgs): Promise<TModel[]> {
        return this.model.findMany(args);   
    }

    async create (args: TCreateArgs): Promise<TModel> {
        return this.model.create(args);
    }

    async delete (args: TDeleteArgs): Promise<void> {
        return this.model.delete(args);
    }

    async update (args: TUpdateArgs): Promise<TModel> {
        return this.model.update(args);
    }
}