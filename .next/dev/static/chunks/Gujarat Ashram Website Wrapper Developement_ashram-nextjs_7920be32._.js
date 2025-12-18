(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...inputs) {
    return inputs.filter(Boolean).join(" ");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none", {
    variants: {
        variant: {
            default: "bg-ashram-amber text-white hover:bg-ashram-amber/90 shadow-sm",
            destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
            outline: "border border-ashram-stone/20 bg-transparent hover:bg-ashram-stone/5 text-ashram-stone",
            secondary: "bg-ashram-sand text-ashram-stone hover:bg-ashram-sand/80 shadow-sm",
            ghost: "hover:bg-ashram-stone/10 text-ashram-stone",
            link: "text-ashram-amber underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-8 px-3 py-1 text-xs",
            lg: "h-12 px-8 py-3 text-base",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ui/button.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/lib/api-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aboutAPI",
    ()=>aboutAPI,
    "contactAPI",
    ()=>contactAPI,
    "eventsAPI",
    ()=>eventsAPI,
    "footerButtonsAPI",
    ()=>footerButtonsAPI,
    "footerLinksAPI",
    ()=>footerLinksAPI,
    "footerSettingsAPI",
    ()=>footerSettingsAPI,
    "heroButtonsAPI",
    ()=>heroButtonsAPI,
    "imagesAPI",
    ()=>imagesAPI,
    "infoCardsAPI",
    ()=>infoCardsAPI,
    "menuItemsAPI",
    ()=>menuItemsAPI,
    "socialLinksAPI",
    ()=>socialLinksAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE = ("TURBOPACK compile-time value", "http://localhost:3001") || 'http://localhost:3000';
// Helper function for API calls
async function fetchAPI(endpoint, options) {
    const url = `${API_BASE}${endpoint}`;
    const response = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
    if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
    }
    return response.json();
}
const menuItemsAPI = {
    getAll: ()=>fetchAPI('/api/menu-items'),
    update: (items)=>fetchAPI('/api/menu-items', {
            method: 'POST',
            body: JSON.stringify(items)
        })
};
const heroButtonsAPI = {
    getAll: ()=>fetchAPI('/api/hero-buttons'),
    update: (buttons)=>fetchAPI('/api/hero-buttons', {
            method: 'POST',
            body: JSON.stringify(buttons)
        })
};
const footerLinksAPI = {
    getAll: ()=>fetchAPI('/api/footer-links'),
    update: (links)=>fetchAPI('/api/footer-links', {
            method: 'POST',
            body: JSON.stringify(links)
        })
};
const eventsAPI = {
    getAll: ()=>fetchAPI('/api/events'),
    create: (event)=>fetchAPI('/api/events', {
            method: 'POST',
            body: JSON.stringify(event)
        }),
    updateAll: (events)=>fetchAPI('/api/events', {
            method: 'POST',
            body: JSON.stringify(events)
        })
};
const aboutAPI = {
    get: ()=>fetchAPI('/api/about'),
    update: (content)=>fetchAPI('/api/about', {
            method: 'POST',
            body: JSON.stringify(content)
        })
};
const infoCardsAPI = {
    getAll: ()=>fetchAPI('/api/info-cards'),
    update: (cards)=>fetchAPI('/api/info-cards', {
            method: 'POST',
            body: JSON.stringify(cards)
        })
};
const contactAPI = {
    getAll: ()=>fetchAPI('/api/contact'),
    update: (contacts)=>fetchAPI('/api/contact', {
            method: 'POST',
            body: JSON.stringify(contacts)
        })
};
const imagesAPI = {
    getByCategory: (category)=>fetchAPI(`/api/images/by-category/${category}`),
    upload: async (file, category)=>{
        const formData = new FormData();
        formData.append('file', file);
        formData.append('category', category);
        const response = await fetch(`${API_BASE}/api/images/upload`, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error(`Upload error: ${response.statusText}`);
        }
        return response.json();
    },
    delete: (id)=>fetchAPI(`/api/images/delete/${id}`, {
            method: 'DELETE'
        })
};
const footerSettingsAPI = {
    get: ()=>fetchAPI('/api/footer-settings'),
    update: (settings)=>fetchAPI('/api/footer-settings', {
            method: 'POST',
            body: JSON.stringify(settings)
        })
};
const socialLinksAPI = {
    getAll: ()=>fetchAPI('/api/social-links'),
    update: (links)=>fetchAPI('/api/social-links', {
            method: 'POST',
            body: JSON.stringify(links)
        })
};
const footerButtonsAPI = {
    getAll: ()=>fetchAPI('/api/footer-buttons'),
    update: (buttons)=>fetchAPI('/api/footer-buttons', {
            method: 'POST',
            body: JSON.stringify(buttons)
        })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/lib/iconMapping.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIconComponent",
    ()=>getIconComponent,
    "iconMap",
    ()=>iconMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/mountain.js [app-client] (ecmascript) <export default as Mountain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trees$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trees$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/trees.js [app-client] (ecmascript) <export default as Trees>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flower$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flower$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/flower.js [app-client] (ecmascript) <export default as Flower>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
;
const iconMap = {
    Home: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
    Users: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    MapPin: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
    Calendar: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
    Heart: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
    Star: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
    Sun: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"],
    Moon: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"],
    Mountain: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__["Mountain"],
    Trees: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trees$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trees$3e$__["Trees"],
    Flower: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flower$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flower$3e$__["Flower"],
    Coffee: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"],
    ImageIcon: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"]
};
function getIconComponent(iconName) {
    return iconMap[iconName] || __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]; // Default to Home if not found
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$fade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectFade$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/swiper/modules/effect-fade.mjs [app-client] (ecmascript) <export default as EffectFade>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/lib/api-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$iconMapping$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/lib/iconMapping.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function HomePage() {
    _s();
    const [aboutContent, setAboutContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [infoCards, setInfoCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [menuItems, setMenuItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [heroButtons, setHeroButtons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [heroImages, setHeroImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [galleryImages, setGalleryImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [contactInfo, setContactInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            loadContent();
        }
    }["HomePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const handleScroll = {
                "HomePage.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 50);
                }
            }["HomePage.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "HomePage.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    const loadContent = async ()=>{
        try {
            const [about, cards, eventsData, menu, hero, heroImgs, galleryImgs, contact] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aboutAPI"].get(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["infoCardsAPI"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventsAPI"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItemsAPI"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroButtonsAPI"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imagesAPI"].getByCategory('hero'),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imagesAPI"].getByCategory('gallery'),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactAPI"].getAll()
            ]);
            setAboutContent(about);
            setInfoCards(cards);
            setEvents(eventsData);
            setMenuItems(menu);
            setHeroButtons(hero);
            setHeroImages(heroImgs);
            setGalleryImages(galleryImgs);
            setContactInfo(contact);
        } catch (error) {
            console.error('Error loading content:', error);
        } finally{
            setLoading(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-ashram-sand",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl text-ashram-clay",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-ashram-sand",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-6 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `font-serif font-bold text-2xl tracking-tight ${isScrolled ? 'text-ashram-clay' : 'text-white'}`,
                                children: "Gujarat Ashram"
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex gap-8 items-center",
                                children: menuItems.map((item, i)=>{
                                    if (item.isSpecial) {
                                        let buttonVariant = 'default';
                                        let buttonClassName = '';
                                        if (item.variant === 'outline') {
                                            buttonVariant = 'outline';
                                            buttonClassName = isScrolled ? 'border-ashram-stone text-ashram-stone hover:bg-ashram-stone hover:text-white' : 'border-white/40 text-white hover:bg-white hover:text-ashram-clay';
                                        } else if (item.variant === 'ghost') {
                                            buttonVariant = 'ghost';
                                            buttonClassName = isScrolled ? 'text-ashram-stone hover:bg-ashram-stone/10' : 'text-white hover:bg-white/10';
                                        } else {
                                            buttonClassName = isScrolled ? 'bg-ashram-amber hover:bg-ashram-amber/90 text-white' : 'bg-white text-ashram-clay hover:bg-white/90';
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: buttonVariant,
                                            className: buttonClassName,
                                            onClick: ()=>window.open(item.url, '_blank'),
                                            children: item.name
                                        }, i, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 19
                                        }, this);
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `text-sm font-medium tracking-wide hover:text-ashram-amber transition-colors ${isScrolled ? 'text-ashram-stone' : 'text-white/90 hover:text-white'}`,
                                        onClick: ()=>window.open(item.url, '_blank'),
                                        children: item.name
                                    }, i, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "md:hidden",
                                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: isScrolled ? 'text-ashram-stone' : 'text-white'
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: isScrolled ? 'text-ashram-stone' : 'text-white'
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                height: 0
                            },
                            animate: {
                                opacity: 1,
                                height: 'auto'
                            },
                            exit: {
                                opacity: 0,
                                height: 0
                            },
                            className: "md:hidden bg-white border-t border-ashram-sand absolute w-full shadow-lg overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col p-6 gap-4",
                                children: menuItems.map((item, i)=>{
                                    if (item.isSpecial) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: item.variant === 'outline' ? 'outline' : item.variant === 'ghost' ? 'ghost' : 'default',
                                            className: "w-full",
                                            onClick: ()=>window.open(item.url, '_blank'),
                                            children: item.name
                                        }, i, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 23
                                        }, this);
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-left text-ashram-stone hover:text-ashram-amber transition-colors py-2",
                                        onClick: ()=>window.open(item.url, '_blank'),
                                        children: item.name
                                    }, i, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                lineNumber: 163,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "relative h-[85vh] min-h-[600px] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        children: heroImages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                            modules: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$fade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectFade$3e$__["EffectFade"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
                            ],
                            effect: "fade",
                            autoplay: {
                                delay: 5000,
                                disableOnInteraction: false
                            },
                            navigation: false,
                            pagination: {
                                clickable: true,
                                dynamicBullets: true
                            },
                            loop: true,
                            className: "h-full w-full",
                            children: heroImages.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full h-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-cover bg-center",
                                                style: {
                                                    backgroundImage: `url(${img.path})`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-black/30 mix-blend-multiply"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 217,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 19
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-ashram-clay to-ashram-stone",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/30"
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 h-full flex items-center justify-center text-center px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "max-w-4xl",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                    className: "font-serif font-bold text-white mb-6 drop-shadow-lg text-5xl md:text-7xl lg:text-8xl",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.3,
                                        duration: 1
                                    },
                                    children: [
                                        aboutContent?.heroTitle || 'Art of Living',
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 242,
                                            columnNumber: 60
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "italic text-ashram-amber",
                                            children: aboutContent?.heroSubtitle || 'Gujarat Ashram'
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 243,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    className: "text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.6
                                    },
                                    children: aboutContent?.heroDescription || 'Discover a sanctuary for inner peace, ancient wisdom, and holistic rejuvenation amidst nature\'s embrace.'
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.9
                                    },
                                    children: heroButtons.map((button, i)=>{
                                        let variant = 'default';
                                        let className = '';
                                        if (button.variant === 'outline') {
                                            variant = 'outline';
                                            className = 'border-white/40 text-white hover:bg-white hover:text-ashram-clay';
                                        } else if (button.variant === 'ghost') {
                                            variant = 'ghost';
                                            className = 'text-white hover:bg-white/10';
                                        } else {
                                            variant = 'default';
                                            className = 'bg-ashram-amber hover:bg-ashram-amber/90 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all';
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: variant,
                                            size: "lg",
                                            className: className,
                                            onClick: ()=>window.open(button.url, '_blank'),
                                            children: button.name
                                        }, i, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            infoCards.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 px-4 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-bold text-ashram-clay mb-12 text-center font-serif",
                            children: "Our Offerings"
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 297,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-8",
                            children: infoCards.map((card)=>{
                                const IconComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$iconMapping$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIconComponent"])(card.icon);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 rounded-lg border-2 border-ashram-amber/20 bg-ashram-sand/50 hover:border-ashram-amber/40 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                className: "w-12 h-12 text-ashram-amber"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 309,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 308,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-ashram-clay mb-3",
                                            children: card.title
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 311,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-ashram-stone",
                                            children: card.description
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 314,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, card.id, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 304,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 300,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                    lineNumber: 296,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                lineNumber: 295,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-6 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -30
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-ashram-amber font-medium tracking-wider uppercase text-sm",
                                    children: aboutContent?.aboutBadge || "Discover"
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-serif text-4xl md:text-5xl font-bold text-ashram-clay mt-2 mb-6",
                                    children: aboutContent?.aboutTitle || "Why Visit the Gujarat Ashram?"
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-ashram-stone/70 text-lg leading-relaxed mb-8",
                                    children: aboutContent?.aboutDescription || "Experience a calm environment filled with wisdom and transformative meditation practices. Our programs are designed for all levels, from beginners to advanced practitioners, providing a path to inner silence and outer dynamism."
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: galleryImages.slice(0, 4).map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        delay: i * 0.1
                                    },
                                    className: "relative aspect-square overflow-hidden rounded-xl group cursor-pointer shadow-md hover:shadow-xl transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110",
                                            style: {
                                                backgroundImage: `url(${img.path})`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                    lineNumber: 325,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            events.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-bold text-ashram-clay mb-12 text-center font-serif",
                            children: "Upcoming Programs"
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 367,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-8",
                            children: events.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg border-2 border-ashram-amber/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-ashram-clay mb-2",
                                            children: event.title
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 376,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-ashram-amber mb-3",
                                            children: event.date
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-ashram-stone",
                                            children: event.description
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 380,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, event.id, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 372,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 370,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                    lineNumber: 366,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                lineNumber: 365,
                columnNumber: 9
            }, this),
            galleryImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 px-4 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-bold text-ashram-clay mb-12 text-center font-serif",
                            children: "Gallery"
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 392,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                            children: galleryImages.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        duration: 0.3,
                                        delay: i * 0.05
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    className: "relative aspect-square overflow-hidden rounded-lg group cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110",
                                            style: {
                                                backgroundImage: `url(${img.path})`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 405,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, img.id, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 397,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 395,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                    lineNumber: 391,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                lineNumber: 390,
                columnNumber: 9
            }, this),
            contactInfo.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-6 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: galleryImages.slice(0, 4).map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        delay: i * 0.1
                                    },
                                    className: "rounded-2xl overflow-hidden shadow-md aspect-[4/3]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full bg-cover bg-center hover:scale-110 transition-transform duration-700",
                                        style: {
                                            backgroundImage: `url(${img.path})`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 432,
                                        columnNumber: 19
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 424,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 422,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 30
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            className: "space-y-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-ashram-sand/30 to-white shadow-2xl border border-ashram-amber/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 w-64 h-64 bg-ashram-amber/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 450,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 w-48 h-48 bg-orange-100/50 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 451,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 bg-gradient-to-br from-ashram-amber to-orange-400 rounded-2xl shadow-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "w-7 h-7 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                            lineNumber: 457,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-serif text-3xl font-bold text-ashram-clay",
                                                                children: "Get in Touch"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                lineNumber: 460,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-ashram-stone/60 text-sm mt-1",
                                                                children: "We're here to help you on your journey"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                lineNumber: 461,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 455,
                                                columnNumber: 19
                                            }, this),
                                            contactInfo.filter((info)=>info.type === "address").map((address)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    className: "mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-ashram-amber/10 hover:border-ashram-amber/30 transition-all hover:shadow-lg group",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1 p-3 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl group-hover:scale-110 transition-transform",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                                                    className: "w-6 h-6 text-ashram-amber"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                    lineNumber: 476,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                lineNumber: 475,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-bold text-lg text-ashram-clay mb-1 flex items-center gap-2",
                                                                        children: [
                                                                            address.label,
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs px-2 py-1 bg-ashram-amber/10 text-ashram-amber rounded-full font-medium",
                                                                                children: "Primary"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                                lineNumber: 481,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                        lineNumber: 479,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-ashram-stone leading-relaxed",
                                                                        children: address.value
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                        lineNumber: 483,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    address.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "ghost",
                                                                        size: "sm",
                                                                        className: "mt-3 text-ashram-amber hover:text-ashram-clay hover:bg-ashram-amber/10 gap-2",
                                                                        onClick: ()=>window.open(address.url, "_blank"),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                                lineNumber: 491,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            "Get Directions",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                                className: "w-3 h-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                                lineNumber: 493,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                        lineNumber: 485,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                lineNumber: 478,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 23
                                                    }, this)
                                                }, address.id, false, {
                                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 21
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                children: contactInfo.filter((info)=>info.type !== "address" && info.type !== "map" && info.isActive).map((contact, idx)=>{
                                                    const iconConfig = {
                                                        phone: {
                                                            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
                                                            gradient: "from-blue-500 to-blue-600",
                                                            bgGradient: "from-blue-50 to-blue-100",
                                                            textColor: "text-blue-600"
                                                        },
                                                        whatsapp: {
                                                            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
                                                            gradient: "from-green-500 to-green-600",
                                                            bgGradient: "from-green-50 to-green-100",
                                                            textColor: "text-green-600"
                                                        },
                                                        email: {
                                                            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
                                                            gradient: "from-purple-500 to-purple-600",
                                                            bgGradient: "from-purple-50 to-purple-100",
                                                            textColor: "text-purple-600"
                                                        },
                                                        website: {
                                                            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                                                            gradient: "from-orange-500 to-orange-600",
                                                            bgGradient: "from-orange-50 to-orange-100",
                                                            textColor: "text-orange-600"
                                                        },
                                                        other: {
                                                            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                                                            gradient: "from-gray-500 to-gray-600",
                                                            bgGradient: "from-gray-50 to-gray-100",
                                                            textColor: "text-gray-600"
                                                        }
                                                    };
                                                    const config = iconConfig[contact.type] || iconConfig.other;
                                                    const Icon = config.Icon;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            delay: idx * 0.1
                                                        },
                                                        whileHover: {
                                                            y: -4,
                                                            scale: 1.02
                                                        },
                                                        className: "group cursor-pointer",
                                                        onClick: ()=>contact.url && window.open(contact.url, "_blank"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-full p-5 bg-white rounded-xl border-2 border-transparent hover:border-ashram-amber/30 shadow-md hover:shadow-xl transition-all",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `p-3 bg-gradient-to-br ${config.bgGradient} rounded-xl group-hover:scale-110 transition-transform`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                            className: `w-5 h-5 ${config.textColor}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                            lineNumber: 561,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                        lineNumber: 560,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs font-semibold text-ashram-stone/60 uppercase tracking-wider mb-1",
                                                                                children: contact.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                                lineNumber: 564,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-medium text-ashram-clay truncate group-hover:text-ashram-amber transition-colors",
                                                                                children: contact.value
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                                lineNumber: 567,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                        lineNumber: 563,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                        className: "w-4 h-4 text-ashram-stone/30 group-hover:text-ashram-amber group-hover:translate-x-1 transition-all"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                        lineNumber: 571,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                lineNumber: 559,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                            lineNumber: 558,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, idx, false, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                        lineNumber: 548,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 502,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 453,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                lineNumber: 448,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 441,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                    lineNumber: 420,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                lineNumber: 419,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-ashram-clay text-white py-12 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-3xl font-bold mb-4 font-serif",
                            children: aboutContent?.footerTitle || 'Gujarat Ashram'
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 588,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-ashram-sand/80 max-w-2xl mx-auto",
                            children: aboutContent?.footerDescription || 'A sanctuary for peace and spiritual growth'
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 591,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                    lineNumber: 587,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                lineNumber: 586,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(HomePage, "3X5jiEyNDWDycqax87OMQSgS2FQ=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Gujarat%20Ashram%20Website%20Wrapper%20Developement_ashram-nextjs_7920be32._.js.map