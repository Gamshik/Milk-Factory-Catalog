export abstract class BasePrismaRepository<
  TModel,
  TFindUniqueArgs,
  TFindManyArgs,
  TCreateArgs,
  TUpdateArgs,
  TDeleteArgs
> {
  protected abstract readonly model: {
    findUnique(args: TFindUniqueArgs): Promise<TModel | null>;
    findMany(args?: TFindManyArgs): Promise<TModel[]>;
    create(args: TCreateArgs): Promise<TModel>;
    delete(args: TDeleteArgs): Promise<TModel>;
    update(args: TUpdateArgs): Promise<TModel>;
  };

  findUnique(args: TFindUniqueArgs): Promise<TModel | null> {
    return this.model.findUnique(args);
  }

  findMany(args?: TFindManyArgs): Promise<TModel[]> {
    return this.model.findMany(args);
  }

  create(args: TCreateArgs): Promise<TModel> {
    return this.model.create(args);
  }

  delete(args: TDeleteArgs): Promise<TModel> {
    return this.model.delete(args);
  }

  update(args: TUpdateArgs): Promise<TModel> {
    return this.model.update(args);
  }
}
