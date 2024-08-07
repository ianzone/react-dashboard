# Tanstack Router

[安装](https://tanstack.com/router/latest/docs/framework/react/quick-start)

## 概念

除跟路由外的所有路由都使用 `FileRoute` 类进行配置

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { fetchPosts } from "./api";

export const Route = createFileRoute("/posts")({
  loader: fetchPosts,
  component: PostsComponent,
});
```

### 跟路由 `src/routes/__root.tsx`

根路由是整个树中最顶层的路由，它没有路径，将所有其他路由封装为子路由。

### 动态路由 `posts.$postId.tsx`

```tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$postId")({
  // In a loader
  loader: ({ params }) => fetchPost(params.postId),
  // Or in a component
  component: PostComponent,
});

function PostComponent() {
  const { postId } = Route.useParams();
  return <div>Post ID: {postId}</div>;
}
```

### 布局路由

```
src/routes/
  _dashboard.tsx   <- 布局路由
  _dashboard/      <- 文件夹中的路由将匹配布局路由
    foo.tsx        <- 将添加 /_dashboard/ 路径
```

```tsx
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
```

### Non-Nested Routes

https://tanstack.com/router/latest/docs/framework/react/guide/routing-concepts#non-nested-routes

## [数据加载](https://tanstack.com/router/v1/docs/framework/react/guide/data-loading)

`beforeLoad` 执行完后组件才开始加载，加载完成之后才能开始渲染，这会导致取得数据之后过一会页面才会变化
`loader` 的执行和组件的加载是并行的

## Hooks

### 路由器相关：useRouter, useRouterState, useRouteContext

useRouter: 获取[路由器对象](https://tanstack.com/router/latest/docs/framework/react/api/router/RouterType)，较为底层，一般不用
useRouterState: 获取[路由器状态](https://tanstack.com/router/latest/docs/framework/react/api/router/RouterStateType)
useRouteContext: 获取当前[路由上下文](https://tanstack.com/router/latest/docs/framework/react/api/router/useRouteContextHook)

### 匹配路由：useMatch, useMatches, useMatchRoute, useChildMatches, useParentMatches

useMatch({ from: '/\_dashboard/account', shouldThrow: false })，如果 /\_dashboard/account 是当前路由的子路由，则返回匹配的路由，否则返回 {state:undefined}

useMatches：获取所有匹配的路由，例如路径 /account 会匹配 1.根路由 \_\_root\_\_，2.布局路由 /\_dashboard，3.账户路由 /\_dashboard/account，但是不会匹配 /\_dashboard/

useMatchRoute 用于匹配子路由的路径参数

useChildMatches 和 useParentMatches 用于获取当前路由的子路由和父路由，但如果某个路由有 pendingComponent，则当前路由会从该路由开始算起，所以不靠谱
