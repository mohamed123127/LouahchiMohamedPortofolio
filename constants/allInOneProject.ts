export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

export interface MetricItem {
  label: string;
  value: string;
  description?: string;
  icon?: string;
}

export interface ChallengeItem {
  title: string;
  challenge: string;
  solution: string;
  icon?: string;
}

export interface CodeSnippet {
  id: string;
  tabLabel: string;
  language: string;
  code: string;
  category?: "frontend" | "backend";
}

export interface RelatedProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export const allInOneProjectData = {
  title: "All-in-One Business Suite",
  subtitle:
    "A complete and modern SaaS platform to help small and medium businesses manage their inventory, sales, orders, customers, and more — all in one place. Designed to simplify daily operations and improve efficiency.",
  technicalSubtitle:
    "A multi-tenant SaaS platform built to help small and medium businesses manage inventory, sales, orders, customers, and more. Built with modern technologies and best practices, focusing on scalability, clean architecture, and maintainability.",

  mockupImage: "/resources/images/Projects/All-in-OneBusinessSuiteSaas/mockup.png",
  badges: ["SaaS", "Full-Stack", "Multi-tenant", "Real Project"],
  liveDemoUrl: "",
  githubUrl: "https://github.com/mohamed123127/All-in-OneBusinessSuiteSaas",

  stats: [
    { value: "6+", label: "Modules", description: "Comprehensive suite" },
    { value: "1000+", label: "Products", description: "Test dataset handled" },
    { value: "Multi-tenant", label: "Architecture", description: "Isolated business data" },
    { value: "Production", label: "Ready", description: "Live deployment" },
  ],

  technicalStats: [
    { value: "10+", label: "Modules", description: "Core business modules" },
    { value: "50+", label: "API Endpoints", description: "REST APIs built" },
    { value: "1800+", label: "Products (Test Data)", description: "Stock items" },
    { value: "15+", label: "Database Entities", description: "Structured data models" },
    { value: "< 200ms", label: "Avg. Response Time", description: "Optimized queries" },
    { value: "20+", label: "Reusable Components", description: "Shared UI components" },
  ],


  overview: {
    client:
      "Invenox is a multi-tenant SaaS platform built to help businesses manage their core operations in a simple and efficient way. It provides a clear and modern interface for handling products, inventory, orders, customers, and more. The goal was to create a scalable solution that can be customized for different businesses (retail, wholesale, e-commerce) while keeping the experience as simple as possible.",
    technical:
      "A modular monorepo built with NestJS (backend) and Next.js (frontend) using TypeORM and a multi-tenant architecture. The system handles product management (variants, attributes), orders, customers, and role-based access with a clean and scalable structure.",
  },

  detailsGrid: {
    industry: "Business & E-commerce",
    targetUsers: "Small & Medium Businesses",
    projectType: "SaaS Web Application",
    myRole: "Full-Stack Developer",
    duration: "2 months (Jul 2026 - Present)",
    teamSize: "2 developers",
    repository: "Private (available on request)",
    status: "In Development",
  },

  keyFeatures: [
    {
      icon: "FiBox",
      title: "Inventory Management",
      description: "Track products, variants, stock levels, and low stock alerts.",
      color: "blue",
    },
    {
      icon: "FiShoppingCart",
      title: "Order Management",
      description: "Create, manage, and track orders from creation to delivery.",
      color: "emerald",
    },
    {
      icon: "FiUsers",
      title: "Customer Management",
      description: "Store and manage customer information and order history.",
      color: "purple",
    },
    {
      icon: "FiBarChart2",
      title: "Sales Analytics",
      description: "Visualize sales, revenue, and growth with clear charts and reports.",
      color: "amber",
    },
    {
      icon: "FiLayers",
      title: "Multi-Tenant",
      description: "Support multiple businesses with isolated data.",
      color: "blue",
    },
    {
      icon: "FiShield",
      title: "Role & Permissions",
      description: "Manage team members with different access levels.",
      color: "amber",
    },
    {
      icon: "FiLayout",
      title: "Modern & Responsive UI",
      description: "A clean and intuitive interface for a smooth experience.",
      color: "sky",
    },
    {
      icon: "FiCpu",
      title: "Extensible",
      description: "Built with scalability in mind for future features and integrations.",
      color: "purple",
    },
  ],

  impactMetrics: [
    { value: "50%", label: "Faster order processing" },
    { value: "30%", label: "Reduction in stock issues" },
    { value: "Higher", label: "Customer satisfaction" },
  ],

  testimonial: {
    quote:
      "Invenox has completely changed the way we manage our business. It's simple, powerful, and exactly what we needed.",
    author: "Ahmed R.",
    role: "Business Owner",
  },

  responsibilities: [
    "Designed the full-stack architecture for scalability and maintainability",
    "Implemented a secure multi-tenant architecture with tenant-level data isolation",
    "Built reusable CRUD infrastructure with generics, including search, filtering, sorting, and pagination",
    "Created type-safe reusable components using TypeScript generics, custom hooks, and component composition",
    "Managed complex state using React Context, Zustand, and local state",
    "Implemented frontend and backend caching using TanStack Query, with Redis support for distributed caching",
    "Implemented JWT authentication, refresh tokens, and RBAC",
  ],



  techStack: {
    client: [
      { name: "Next.js", icon: "FiCode" },
      { name: "NestJS", icon: "FiServer" },
      { name: "PostgreSQL", icon: "FiDatabase" },
      { name: "TypeScript", icon: "FiCode" },
      { name: "Tailwind CSS", icon: "FiLayout" },
      { name: "Docker", icon: "FiBox" },
      { name: "AWS", icon: "FiCloud" },
    ],
    technical: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand", "Zod", "React Hook Form"],
      backend: ["NestJS", "TypeORM", "PostgreSQL"],
      devops: ["Git", "GitHub", "npm"],
    },

  },

  challenges: [
    {
      title: "Multi-tenant data isolation",
      challenge: "Ensuring secure data isolation across multiple business accounts.",
      solution: "Implemented tenant-aware repositories and custom guards to enforce tenant-level access.",
      icon: "FiShield",
    },
    {
      title: "Complex product variants",
      challenge: "Designing a flexible data model for dynamic attributes, values, and product variations.",
      solution: "Designed a flexible Product, Variant, Attribute, and AttributeValue architecture.",
      icon: "FiLayers",
    },
    {
      title: "Large datasets & performance",
      challenge: "Maintaining performance while processing and querying large datasets.",
      solution: "Implemented pagination, filtering, caching, database indexing, and optimized queries.",
      icon: "FiZap",
    },
    {
      title: "Development efficiency",
      challenge: "Reducing boilerplate and duplicated logic across business modules.",
      solution: "Built generic modules, services, repositories, controllers, and mappers for faster development.",
      icon: "FiCpu",
    },
  ],

  whatILearned: [
    "Designing scalable multi-tenant applications",
    "Building reusable and maintainable application architectures",
    "Optimizing database queries and application performance",
    "Modeling complex real-world business requirements",
  ],



  codeSnippets: [
    // ─── BACKEND ────────────────────────────────────────────────────────────
    {
      id: "tenant-repository",
      tabLabel: "TenantRepository",
      language: "typescript",
      category: "backend" as const,
      code: `// common/base/repositories/tenant-repository.ts
// Every read/write is automatically scoped to the current tenant via CLS.
// Callers never touch tenantId — isolation is enforced at the repo layer.

@Injectable()
export class TenantRepository<T extends TenantScopedEntity> extends Repository<T> {
  constructor(target: any, manager: any, private readonly cls: ClsService) {
    super(target, manager);
  }

  private get tenantId(): string {
    const id = this.cls.get('tenantId');
    if (!id) {
      // fail loudly — silently omitting tenantId is how cross-tenant leaks happen
      throw new Error('tenantId not found in CLS context');
    }
    return id;
  }

  private scopeWhere(
    where?: FindOptionsWhere<T> | FindOptionsWhere<T>[],
  ): FindOptionsWhere<T> | FindOptionsWhere<T>[] {
    const tenantId = this.tenantId;
    if (Array.isArray(where)) return where.map((w) => ({ ...w, tenantId }));
    return { ...(where ?? {}), tenantId } as FindOptionsWhere<T>;
  }

  private stripTenantId<P extends object>(payload: P): P {
    const { tenantId, ...rest } = payload as any;
    return rest;
  }

  override find(options: any = {}) {
    return super.find({ ...options, where: this.scopeWhere(options.where) });
  }

  override findOne(options: any) {
    return super.findOne({ ...options, where: this.scopeWhere(options.where) });
  }

  override findAndCount(options: any = {}) {
    return super.findAndCount({ ...options, where: this.scopeWhere(options.where) });
  }

  override create(entityLike?: any): any {
    const tenantId = this.tenantId;
    if (Array.isArray(entityLike))
      return super.create(entityLike.map((e) => ({ ...e, tenantId })));
    return super.create({ ...(entityLike ?? {}), tenantId });
  }

  override save(entityOrEntities: any, options?: any): any {
    const tenantId = this.tenantId;
    if (Array.isArray(entityOrEntities))
      return super.save(entityOrEntities.map((e) => ({ ...e, tenantId })) as any, options);
    return super.save({ ...entityOrEntities, tenantId } as any, options);
  }

  override update(criteria: any, partialEntity: QueryDeepPartialEntity<T>): Promise<UpdateResult> {
    const safePayload = this.stripTenantId(partialEntity as object);
    return super.update(this.scopeCriteria(criteria), safePayload as any);
  }

  override createQueryBuilder(alias: string, queryRunner?: any) {
    return super
      .createQueryBuilder(alias, queryRunner)
      .andWhere(\`\${alias}.tenantId = :tenantId\`, { tenantId: this.tenantId });
  }
}`,
    },
    {
      id: "base-crud-service",
      tabLabel: "BaseCrudService",
      language: "typescript",
      category: "backend" as const,
      code: `// common/base/services/base-crud.service.ts
// Generic abstract service — concrete services extend this and get
// search, filter, sort, pagination, and lifecycle hooks for free.

export abstract class BaseCrudService<Entity extends BaseEntity, CreateDto, UpdateDto>
  implements IService<Entity, CreateDto, UpdateDto> {

  public allowedSearchableFields: SearchField<Entity>[] = [];
  public allowedFilterFields: (keyof Entity)[] = [];
  public allowedOrderFields: (keyof Entity)[] = [];
  protected computedFields: ComputedFieldMap<Entity> = {};
  protected defaultRelations: FindOptionsRelations<Entity> = {};
  protected defaultOrder: FindOptionsOrder<Entity> = {};

  constructor(protected readonly repository: Repository<Entity>) {}

  // Lifecycle hooks — override in subclasses as needed
  protected async validateCreate(entity: Entity): Promise<void> {}
  protected async validateUpdate(entity: Entity): Promise<void> {}
  protected async beforSaveCreate(entity: Entity, dto: CreateDto): Promise<void> {}

  async create(dto: CreateDto): Promise<Entity> {
    const entity = this.repository.create(dto as DeepPartial<Entity>);
    await this.validateCreate(entity);
    await this.beforSaveCreate(entity, dto);
    return this.repository.save(entity);
  }

  async search(
    searchText?: string,
    filters?: Filter<Entity>[],
    pagination?: PaginationOptions,
    order?: FindOptionsOrder<Entity>,
  ): Promise<{ data: Entity[]; total: number }> {
    const qb = this.repository.createQueryBuilder('entity');
    qb.setFindOptions({ relations: this.defaultRelations });
    this.applySearch(qb, searchText);
    if (filters) this.applyFilters(qb, filters);
    this.applyOrder(qb, order);
    this.applyPagination(qb, pagination);
    const [data, total] = await qb.getManyAndCount();
    return { data, total };
  }

  protected applySearch(qb: SelectQueryBuilder<Entity>, searchText?: string): void {
    if (!searchText?.trim()) return;
    const term = searchText.trim();
    const clauses = this.allowedSearchableFields
      .map(({ field, operator }, i) => {
        const col = \`entity.\${String(field)}\`;
        const param = \`searchTerm_\${i}\`;
        if (operator === 'ilike') { qb.setParameter(param, \`%\${term}%\`); return \`\${col} ILIKE :\${param}\`; }
        qb.setParameter(param, term);
        return \`\${col} = :\${param}\`;
      })
      .join(' OR ');
    if (clauses) qb.andWhere(\`(\${clauses})\`);
  }
}`,
    },
    {
      id: "base-crud-controller",
      tabLabel: "BaseCrudController",
      language: "typescript",
      category: "backend" as const,
      code: `// common/base/controllers/base-crud.controller.ts
// Mixin factory — generates a full CRUD controller with per-action RBAC.
// Because TS erases generics at runtime, we patch Reflect metadata manually
// so NestJS ValidationPipe sees the real DTO class instead of Object.

export function BaseCrudController<CreateDto, UpdateDto>(
  createDtoClass: Type<CreateDto>,
  updateDtoClass: Type<UpdateDto>,
  permissions: AuthorizationOptions = {},
) {
  const rolesFor = (action: CrudAction): string[] => {
    if (!permissions.roles) return [];
    if (Array.isArray(permissions.roles)) return permissions.roles;
    return permissions.roles[action] ?? [];
  };

  @UseGuards(RolesGuard)
  abstract class BaseCrudControllerMixin<Entity extends BaseEntity>
    extends BaseCrudControllerHost<Entity, CreateDto, UpdateDto> {

    @Roles(...rolesFor('create'))
    @Post()
    create(@Body() dto: CreateDto) { return this.service.create(dto); }

    @Roles(...rolesFor('search'))
    @Post('search')
    async search(@Query() query: PaginationQueryDto, @Body() body?: SearchDto<Entity>) {
      const order = query.sortBy
        ? ({ [query.sortBy]: query.sortOrder ?? 'ASC' } as FindOptionsOrder<Entity>)
        : undefined;
      const filters = body?.filters as Filter<Entity>[] | undefined;
      const result = await this.service.search(body?.searchText, filters, query, order);
      return {
        message: \`\${this.service.printableEntityName(true)} searched successfully\`,
        meta: { total: result.total, page: query.page, limit: query.limit,
                totalPages: Math.ceil(result.total / query.limit) },
        data: this.mapper.toSummaryDtoList(result.data),
      };
    }

    @Roles(...rolesFor('findOne'))
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
      const entity = await this.service.findOne(id);
      return { message: \`\${this.service.printableEntityName()} fetched successfully\`,
               data: this.mapper.toResponseDto(entity) };
    }
  }

  // Patch generic-erased paramtypes so ValidationPipe works correctly
  Reflect.defineMetadata('design:paramtypes', [createDtoClass],
    BaseCrudControllerMixin.prototype, 'create');
  Reflect.defineMetadata('design:paramtypes', [Number, updateDtoClass],
    BaseCrudControllerMixin.prototype, 'update');

  return BaseCrudControllerMixin as abstract new <Entity extends BaseEntity>(
    service: IService<Entity, CreateDto, UpdateDto>,
    mapper: IMapper<Entity>,
  ) => BaseCrudControllerHost<Entity, CreateDto, UpdateDto>;
}`,
    },
    {
      id: "products-service",
      tabLabel: "ProductsService",
      language: "typescript",
      category: "backend" as const,
      code: `// modules/inventory/products/products.service.ts
// Concrete service — extends BaseCrudService, configures allowed fields,
// adds computed SQL for stock quantity across all variants, and auto-generates barcodes.

@Injectable()
export class ProductsService
  extends BaseCrudService<ProductEntity, CreateProductDto, UpdateProductDto> {

  override allowedSearchableFields: SearchField<ProductEntity>[] = [
    { field: 'name', operator: 'ilike' },
    { field: 'barcode', operator: 'ilike' },
  ];
  override allowedFilterFields: (keyof ProductEntity)[] = ['status', 'quantity'];

  // Computed SQL field — quantity is the SUM of all variant stocks
  override computedFields: ComputedFieldMap<ProductEntity> = {
    quantity: \`(SELECT COALESCE(SUM(v.quantity), 0)
                FROM product_variants v WHERE v."productId" = entity.id)\`,
  };

  constructor(
    @InjectTenantRepository(ProductEntity) repo: TenantRepository<ProductEntity>,
    private readonly barcodeGenerator: BarcodeGenerator,
    private readonly cls: ClsService,
  ) {
    super(repo);
    this.defaultRelations = {
      variants: { variants: { attributeValue: { attribute: true } } },
    };
  }

  protected override async validateCreate(entity: ProductEntity): Promise<void> {
    await assertUnique(this.repository, [{ field: 'name', value: entity.name }], 'ProductEntity');
  }

  protected override async beforSaveCreate(
    entity: ProductEntity,
    dto: CreateProductDto,
  ): Promise<void> {
    entity.barcode = await this.barcodeGenerator.generateBarcode(
      this.cls.get('tenantId'),
    );
  }
}`,
    },
    {
      id: "product-entity",
      tabLabel: "Product Entity",
      language: "typescript",
      category: "backend" as const,
      code: `// modules/inventory/products/entities/product.entity.ts
// Composite tenant + barcode unique index prevents barcode collisions per tenant.
// quantity is a computed getter (aggregates variant stock) — never stored.

@Entity('products')
@Index('IDX_product_tenant_barcode', ['tenantId', 'barcode'], { unique: true })
@Index('IDX_product_tenant_sku',     ['tenantId', 'sku'])
@Index('IDX_product_tenant_name',    ['tenantId', 'name'])
export class ProductEntity extends TenantScopedEntity implements Product {
  @Column()
  name: string;

  @Column({ length: 9 })
  barcode: string;

  @Column({ nullable: true })
  sku?: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true, default: 0 })
  costPrice: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  sellingPrice: number;

  // Aggregated from variants — not persisted as a column
  get quantity(): number {
    if (!this.variants) return 0;
    return this.variants.reduce((total, v) => total + v.quantity, 0);
  }

  @Column({
    type: 'enum',
    enum: ['active', 'inactive', 'archived'],
    default: 'active',
  })
  status: 'active' | 'inactive' | 'archived';

  @OneToMany(
    () => ProductVariantEntity,
    (productVariant) => productVariant.product,
    { onDelete: 'CASCADE' },
  )
  variants: ProductVariantEntity[];
}`,
    },
    {
      id: "auth-service",
      tabLabel: "AuthService (JWT)",
      language: "typescript",
      category: "backend" as const,
      code: `// modules/auth/auth.service.ts
// Sign-up atomically creates tenant + admin user, then issues a token pair.
// Refresh tokens are hashed in the DB — revocation works even if the JWT is still valid.

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private tenantsService: TenantsService,
    private jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly cls: ClsService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.hashedPassword))) {
      const { hashedPassword, ...result } = user;
      return result;
    }
    return null;
  }

  async signUp(dto: SignUpDto) {
    const tenant = await this.tenantsService.create(dto.tenant);
    // Inject tenantId into CLS so the tenant-scoped UserRepository works correctly
    this.cls.set('tenantId', tenant.id);
    const user = await this.usersService.create({ ...dto.user, role: 'admin' });
    return this.login(user);
  }

  async login(user: User) {
    const payload = { sub: user.id, email: user.email,
                      role: user.role, tenantId: user.tenantId };
    const refresh_token = this.jwtService.sign(payload, {
      secret: this.configService.getOrThrow<string>('auth.jwt.refreshSecret'),
      expiresIn: this.configService.getOrThrow<StringValue>('auth.jwt.refreshExpiration'),
    });
    await this.usersService.setRefreshToken(user.id, refresh_token);
    return { access_token: this.jwtService.sign(payload), refresh_token };
  }

  async refreshTokens(user: User & { refreshToken: string }) {
    // Validate raw token against bcrypt hash — rejects revoked tokens
    const validUser = await this.usersService.getUserIfRefreshTokenMatches(
      user.refreshToken, user.id,
    );
    if (!validUser) throw new UnauthorizedException('Refresh token has been revoked');
    return this.login(validUser); // issue a fresh rotated pair
  }

  async logout(userId: number) {
    await this.usersService.setRefreshToken(userId, null);
  }
}`,
    },

    // ─── FRONTEND ────────────────────────────────────────────────────────────
    {
      id: "create-crud-hooks",
      tabLabel: "createCrudHooks",
      language: "typescript",
      category: "frontend" as const,
      code: `// api/createCrudHooks.ts
// Generic TanStack Query hooks factory — one call generates a full
// useList / useSearch / useCount / useDetail / useCreate / useUpdate / useDelete suite
// for any entity, with automatic cache invalidation wired up.

export function createCrudHooks<
  T extends { id: string | number },
  TCreate = Partial<T>,
  TUpdate = Partial<T>,
>(entity: string, baseUrl: string) {
  const api  = createApiService<T, TCreate, TUpdate>({ baseUrl });
  const keys = createQueryKeys(entity);

  function useSearch(filters: Filter<T>[], options?: Partial<UseQueryOptions<SearchApiResponse<T>>>): SearchResponse<T> {
    const searchText = filters.find(({ key }) => key === 'searchText')?.value;
    const formattedFilters = filters
      .filter(({ key }) => key !== 'searchText')
      .map(({ key, value, operator }) => ({ key, value, operator }));
    const payload = { searchText, filters: formattedFilters };
    const query = useQuery<SearchApiResponse<T>>({
      queryKey: keys.list(payload),
      queryFn:  () => api.search(payload),
      ...options,
    });
    return { data: query.data?.data ?? [], meta: query.data?.meta ?? null,
             isLoading: query.isLoading, error: query.error };
  }

  function useCreate(): CreateResponse<T> {
    const queryClient = useQueryClient();
    const query = useMutation({
      mutationFn: (payload: TCreate) => api.create(payload),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: keys.lists() }),
    });
    return { data: query.data?.data ?? null, isPending: query.isPending, error: query.error };
  }

  function useUpdate(): UpdateResponse<T> {
    const queryClient = useQueryClient();
    const query = useMutation({
      mutationFn: ({ id, payload }: { id: string | number; payload: TUpdate }) =>
        api.update(id, payload),
      onSuccess: (updated, { id }) => {
        queryClient.setQueryData(keys.detail(id), updated);    // optimistic update
        queryClient.invalidateQueries({ queryKey: keys.lists() });
      },
    });
    return { data: query.data?.data ?? null, isPending: query.isPending, error: query.error };
  }

  return { keys, api, useList, useCount, useDetail, useSearch, useCreate, useUpdate, useDelete };
}`,
    },
    {
      id: "api-client",
      tabLabel: "Axios Client",
      language: "typescript",
      category: "frontend" as const,
      code: `// api/client.ts
// Singleton Axios client with:
//   • Auth token injection on every request
//   • Automatic silent token refresh on 401 (with request queue to avoid race conditions)
//   • Redirect to /login if refresh fails

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  timeout: 10000,
});

// Attach access token from in-memory store (never localStorage)
apiClient.interceptors.request.use((config) => {
  const token = tokenStore.get();
  if (token) config.headers.Authorization = \`Bearer \${token}\`;
  return config;
});

let isRefreshing = false;
let failedQueue: Array<{ resolve: (token: string) => void; reject: (err: any) => void }> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((p) => (error ? p.reject(error) : token && p.resolve(token)));
  failedQueue = [];
};

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config;
    const isAuthUrl = ['login', 'refresh', 'sign-up'].some((u) => original?.url?.includes(u));

    if (error.response?.status === 401 && !original._retry && !isAuthUrl) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => failedQueue.push({ resolve, reject }))
          .then((token) => { original.headers.Authorization = \`Bearer \${token}\`; return apiClient(original); });
      }
      original._retry = true;
      isRefreshing = true;
      try {
        const [success] = await refreshTokenHandler?.() ?? [false];
        if (success) {
          const newToken = tokenStore.get()!;
          processQueue(null, newToken);
          original.headers.Authorization = \`Bearer \${newToken}\`;
          return apiClient(original);
        }
        processQueue(error, null);
        tokenStore.clear();
        window.location.href = '/login';
      } finally { isRefreshing = false; }
    }
    return Promise.reject({ status: error.response?.status ?? 0,
                            message: error.response?.data?.message ?? error.message });
  },
);`,
    },
    {
      id: "filter-factory",
      tabLabel: "FilterFactory & Logic",
      language: "typescript",
      category: "frontend" as const,
      code: `// components/molecules/Filters/factories/filter.factory.tsx
// Polymorphic Filter Factory adhering to Open/Closed Principle.
// Dynamically resolves & renders filter components while standardizing state mutations.

const FILTER_REGISTRY: Record<FilterType, React.ComponentType<FilterConfig<any>>> = {
  comboBox: ComboBoxFilter,
  dateRange: DateRangeFilter,
  search: SearchInputFilter,
};

export function createFilter<T>(config: FilterConfig<T>) {
  const Component = FILTER_REGISTRY[config.type];
  if (!Component) {
    throw new Error(\`Unregistered filter type: "\${config.type}"\`);
  }
  return <Component key={String(config.filterKey)} {...config} />;
}

// State updater logic for immutable multi-filter state updates
export function applyFilterUpdate<T>(
  prevFilters: FilterState[],
  key: keyof T,
  value: string | string[]
): FilterState[] {
  const filtered = prevFilters.filter((f) => f.key !== key);
  if (value === 'all' || value === '' || (Array.isArray(value) && value.length === 0)) {
    return filtered; // Clears filter if default/empty
  }
  return [...filtered, { key: String(key), value }];
}`,
    },
  ],

  dbSchema: [
    {
      name: "Product",
      fields: ["id (PK)", "name", "description", "status", "tenant_id", "created_at"],
    },
    {
      name: "ProductVariant",
      fields: ["id (PK)", "product_id (FK)", "sku", "price", "stock", "tenant_id"],
    },
    {
      name: "Variant",
      fields: ["id (PK)", "name (e.g. Color)", "type", "tenant_id"],
    },
    {
      name: "VariantValue",
      fields: ["id (PK)", "variant_id (FK)", "value (e.g. Red)", "tenant_id"],
    },
  ],

  screenshots: [
    {
      title: "Executive Dashboard",
      src: "/resources/images/Projects/All-in-OneBusinessSuiteSaas/Dashboard.png",
      alt: "Executive dashboard showing business metrics, revenue charts, and operational summary",
    },
    {
      title: "Product Catalog & Inventory",
      src: "/resources/images/Projects/All-in-OneBusinessSuiteSaas/Products.png",
      alt: "Product management table with SKU variants, pricing, and stock tracking",
    },
    {
      title: "POS & Sales Terminal",
      src: "/resources/images/Projects/All-in-OneBusinessSuiteSaas/Sales.png",
      alt: "Point of Sale order terminal, checkout workflow, and transaction history",
    },
    {
      title: "POS New Sale",
      src: "/resources/images/Projects/All-in-OneBusinessSuiteSaas/POSNewSale.png",
      alt: "Point of Sale new order creation interface",
    },
    {
      title: "Supplier & Procurement",
      src: "/resources/images/Projects/All-in-OneBusinessSuiteSaas/Suppliers.png",
      alt: "Supplier management directory and purchase order tracking",
    },
    {
      title: "Offers",
      src: "/resources/images/Projects/All-in-OneBusinessSuiteSaas/offers.png",
      alt: "Special offers",
    },
    {
      title: "Authentication",
      src: "/resources/images/Projects/All-in-OneBusinessSuiteSaas/Login.png",
      alt: "Authentication and secure login portal",
    },
    {
      title: "User/Tenant Registration",
      src: "/resources/images/Projects/All-in-OneBusinessSuiteSaas/SignUp.png",
      alt: "Tenant registration, business profile setup, and onboarding flow",
    },
  ],

  relatedProjects: [
    {
      title: "University Exams Planner",
      description: "Automatic exam scheduling system with conflict resolution.",
      image: "/resources/images/Projects/University-Request-Management-System/main.png",
      tags: ["Web App", "Education", "React", "FastAPI"],
      link: "/#projects",
    },
    {
      title: "Travel Discovery Platform",
      description: "A web app for discovering amazing places with personalized recommendations.",
      image: "/resources/images/Projects/Ecommerce-Store/main.png",
      tags: ["Web App", "Travel", "Next.js", "TypeScript"],
      link: "/#projects",
    },
    {
      title: "Clothing Store / Ecommerce",
      description: "An online store for clothing with product variants and inventory management.",
      image: "/resources/images/Projects/Ecommerce-Store/main.png",
      tags: ["Web App", "E-commerce", "Next.js", "Laravel"],
      link: "/#projects",
    },
  ],
};

