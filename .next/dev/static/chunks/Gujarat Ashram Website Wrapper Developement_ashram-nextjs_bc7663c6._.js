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
const API_BASE = ("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000';
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
        formData.append('image', file);
        formData.append('category', category);
        const response = await fetch(`${API_BASE}/api/images/upload`, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error('Failed to upload image');
        }
        return response.json();
    },
    delete: (id)=>fetchAPI(`/api/images/${id}`, {
            method: 'DELETE'
        }),
    reorder: (updates)=>fetchAPI('/api/images/reorder', {
            method: 'POST',
            body: JSON.stringify({
                updates
            })
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
"[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ZenPreloader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZenPreloader",
    ()=>ZenPreloader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ZenPreloader({ onComplete }) {
    _s();
    const [exit, setExit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ZenPreloader.useEffect": ()=>{
            // Determine total loading time (min 2s for effect)
            const timer = setTimeout({
                "ZenPreloader.useEffect.timer": ()=>{
                    setExit(true);
                    setTimeout(onComplete, 800); // Wait for exit animation
                }
            }["ZenPreloader.useEffect.timer"], 2000);
            return ({
                "ZenPreloader.useEffect": ()=>clearTimeout(timer)
            })["ZenPreloader.useEffect"];
        }
    }["ZenPreloader.useEffect"], [
        onComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-ashram-sand",
        initial: {
            opacity: 1
        },
        animate: exit ? {
            opacity: 0
        } : {
            opacity: 1
        },
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-32 h-32 mb-8",
                    children: [
                        [
                            ...Array(3)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute inset-0 border-2 border-ashram-amber/30 rounded-full",
                                initial: {
                                    scale: 0.8,
                                    opacity: 0
                                },
                                animate: {
                                    scale: [
                                        1,
                                        1.5,
                                        1
                                    ],
                                    opacity: [
                                        0.5,
                                        0,
                                        0.5
                                    ],
                                    rotate: [
                                        0,
                                        180,
                                        360
                                    ]
                                },
                                transition: {
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: i * 0.4,
                                    ease: "easeInOut"
                                }
                            }, i, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ZenPreloader.tsx",
                                lineNumber: 29,
                                columnNumber: 14
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute inset-0 m-auto w-4 h-4 bg-ashram-amber rounded-full",
                            animate: {
                                scale: [
                                    1,
                                    1.2,
                                    1
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Infinity
                            }
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ZenPreloader.tsx",
                            lineNumber: 46,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ZenPreloader.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "overflow-hidden h-8",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.5
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        className: "text-ashram-clay font-serif text-2xl tracking-[0.2em] uppercase",
                        initial: {
                            y: 30
                        },
                        animate: {
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            ease: "easeOut"
                        },
                        children: "Gujarat Ashram"
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ZenPreloader.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ZenPreloader.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "mt-2 text-ashram-stone/60 text-xs tracking-widest uppercase",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.8
                    },
                    children: "Loading Serenity"
                }, void 0, false, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ZenPreloader.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ZenPreloader.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ZenPreloader.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(ZenPreloader, "JkCyTrBlBziNqHC/GiZ236hT+LQ=");
_c = ZenPreloader;
var _c;
__turbopack_context__.k.register(_c, "ZenPreloader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/TiltCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TiltCard",
    ()=>TiltCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$vanilla$2d$tilt$2f$lib$2f$vanilla$2d$tilt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/vanilla-tilt/lib/vanilla-tilt.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function TiltCard({ children, className = '' }) {
    _s();
    const tiltRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TiltCard.useEffect": ()=>{
            if (tiltRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$vanilla$2d$tilt$2f$lib$2f$vanilla$2d$tilt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init(tiltRef.current, {
                    max: 5,
                    speed: 400,
                    glare: true,
                    'max-glare': 0.15,
                    scale: 1.02
                });
            }
        }
    }["TiltCard.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: tiltRef,
        className: `transform-style-3d ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/TiltCard.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(TiltCard, "kBvroaB6yT9LowDzxRU8HcXHp/I=");
_c = TiltCard;
var _c;
__turbopack_context__.k.register(_c, "TiltCard");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ZenPreloader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ZenPreloader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$TiltCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/TiltCard.tsx [app-client] (ecmascript)");
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
;
function HomePage() {
    _s();
    const [aboutContent, setAboutContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [infoCards, setInfoCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [menuItems, setMenuItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [heroButtons, setHeroButtons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [heroImages, setHeroImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [heroMobileImages, setHeroMobileImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]) // NEW
    ;
    const [galleryImages, setGalleryImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [contactInfo, setContactInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [footerLinks, setFooterLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Parallax Logic
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const heroTextY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        500
    ], [
        0,
        200
    ]);
    const heroBgY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        500
    ], [
        0,
        100
    ]);
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
            const [about, cards, eventsData, menu, hero, heroImgs, heroMobileImgs, galleryImgs, contact, fLinks] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aboutAPI"].get(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["infoCardsAPI"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventsAPI"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItemsAPI"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroButtonsAPI"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imagesAPI"].getByCategory('hero'),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imagesAPI"].getByCategory('hero-mobile'),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imagesAPI"].getByCategory('gallery'),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactAPI"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footerLinksAPI"].getAll()
            ]);
            setAboutContent(about);
            setInfoCards(cards);
            setEvents(eventsData);
            setMenuItems(menu);
            setHeroButtons(hero);
            setHeroImages(heroImgs);
            setHeroMobileImages(heroMobileImgs);
            setGalleryImages(galleryImgs);
            setContactInfo(contact);
            setFooterLinks(fLinks);
        } catch (error) {
            console.error('Error loading content:', error);
        } finally{
            setLoading(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ZenPreloader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZenPreloader"], {
            onComplete: ()=>setLoading(false)
        }, void 0, false, {
            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
            lineNumber: 83,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-ashram-sand",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/70 backdrop-blur-xl border-b border-ashram-stone/5 shadow-sm py-3' : 'bg-transparent py-6'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-6 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/aol-logo-transparent.png",
                                        alt: "Art of Living Logo",
                                        className: `h-12 w-auto transition-all duration-500 ${isScrolled ? '' : 'brightness-0 invert'}`
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col leading-tight",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold uppercase tracking-widest text-[#F59E0B]",
                                                children: "The Art of Living"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-serif font-bold text-xl ${isScrolled ? 'text-ashram-clay' : 'text-white'}`,
                                                children: "Sri Sri Gujarat Ashram"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                lineNumber: 97,
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
                                            buttonClassName = isScrolled ? 'border-2 border-ashram-clay text-ashram-clay hover:bg-ashram-clay hover:text-white font-bold tracking-wide' : 'border-2 border-white text-white hover:bg-white hover:text-ashram-clay font-bold tracking-wide backdrop-blur-sm';
                                        } else if (item.variant === 'ghost') {
                                            buttonVariant = 'ghost';
                                            buttonClassName = isScrolled ? 'text-ashram-stone hover:text-ashram-amber hover:bg-ashram-amber/5 font-semibold' : 'text-white hover:text-ashram-sand hover:bg-white/10 font-semibold';
                                        } else {
                                            buttonClassName = isScrolled ? 'bg-ashram-clay hover:bg-ashram-amber text-white font-bold shadow-md transition-all duration-300' : 'bg-ashram-amber text-white hover:bg-white hover:text-ashram-clay font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] border border-white/20 transition-all duration-300 transform hover:-translate-y-0.5';
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: buttonVariant,
                                            className: buttonClassName,
                                            onClick: ()=>{
                                                if (item.url && item.url.length > 8 && item.url !== 'https://') {
                                                    window.open(item.url, '_blank');
                                                } else {
                                                    console.warn('Invalid URL:', item.url);
                                                }
                                            },
                                            children: item.name
                                        }, i, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 19
                                        }, this);
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `text-sm font-medium tracking-wide hover:text-ashram-amber transition-colors ${isScrolled ? 'text-ashram-stone' : 'text-white/90 hover:text-white'}`,
                                        onClick: ()=>{
                                            if (item.url && item.url.length > 8 && item.url !== 'https://') {
                                                window.open(item.url, '_blank');
                                            }
                                        },
                                        children: item.name
                                    }, i, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "md:hidden",
                                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: isScrolled ? 'text-ashram-stone' : 'text-white'
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: isScrolled ? 'text-ashram-stone' : 'text-white'
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                        lineNumber: 96,
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
                                            onClick: ()=>{
                                                if (item.url && item.url.length > 8 && item.url !== 'https://') {
                                                    window.open(item.url, '_blank');
                                                }
                                            },
                                            children: item.name
                                        }, i, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 23
                                        }, this);
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-left text-ashram-stone hover:text-ashram-amber transition-colors py-2",
                                        onClick: ()=>{
                                            if (item.url && item.url.length > 8 && item.url !== 'https://') {
                                                window.open(item.url, '_blank');
                                            }
                                        },
                                        children: item.name
                                    }, i, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                lineNumber: 190,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "relative h-[85vh] min-h-[600px] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            y: heroBgY
                        },
                        className: "absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${heroMobileImages.length > 0 ? 'hidden md:block' : 'block'} h-full w-full`,
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
                                                        lineNumber: 247,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-black/30 mix-blend-multiply"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 21
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-br from-ashram-clay to-ashram-stone",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/30"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            heroMobileImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden h-full w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
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
                                    children: heroMobileImages.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
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
                                                        lineNumber: 281,
                                                        columnNumber: 24
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-black/30 mix-blend-multiply"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 24
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 24
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 280,
                                                columnNumber: 22
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 279,
                                            columnNumber: 20
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 269,
                                    columnNumber: 16
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                lineNumber: 268,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 h-full flex items-center justify-center text-center px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            style: {
                                y: heroTextY
                            },
                            className: "max-w-4xl",
                            initial: "hidden",
                            animate: "visible",
                            variants: {
                                hidden: {
                                    opacity: 0
                                },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.15
                                    }
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                    className: "font-serif font-bold text-white mb-6 drop-shadow-lg text-5xl md:text-7xl lg:text-8xl",
                                    variants: {
                                        hidden: {
                                            opacity: 0,
                                            y: 30,
                                            filter: "blur(10px)"
                                        },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            filter: "blur(0px)",
                                            transition: {
                                                duration: 1,
                                                ease: "easeOut"
                                            }
                                        }
                                    },
                                    children: [
                                        aboutContent?.heroTitle || 'Art of Living',
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 325,
                                            columnNumber: 60
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            className: "italic text-ashram-amber inline-block",
                                            variants: {
                                                hidden: {
                                                    opacity: 0,
                                                    scale: 0.9,
                                                    y: 20,
                                                    filter: "blur(8px)"
                                                },
                                                visible: {
                                                    opacity: 1,
                                                    scale: 1,
                                                    y: 0,
                                                    filter: "blur(0px)",
                                                    transition: {
                                                        duration: 1.2,
                                                        ease: [
                                                            0.25,
                                                            0.4,
                                                            0.25,
                                                            1
                                                        ],
                                                        delay: 0.2
                                                    }
                                                }
                                            },
                                            children: aboutContent?.heroSubtitle || 'Sri Sri Gujarat Ashram'
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 326,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    className: "text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed",
                                    variants: {
                                        hidden: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.6
                                            }
                                        }
                                    },
                                    children: aboutContent?.heroDescription || 'Discover a sanctuary for inner peace, ancient wisdom, and holistic rejuvenation amidst nature\'s embrace.'
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 347,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                                    variants: {
                                        hidden: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.6
                                            }
                                        }
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
                                            className = 'bg-ashram-amber hover:bg-ashram-amber/90 text-white shadow-lg hover:shadow-xl transition-all';
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: 0.98
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: variant,
                                                size: "lg",
                                                className: className,
                                                onClick: ()=>window.open(button.url, '_blank'),
                                                children: button.name
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 385,
                                                columnNumber: 21
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 380,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 357,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            infoCards.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-4 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                margin: "-100px"
                            },
                            className: "text-4xl font-bold text-ashram-clay mb-16 text-center font-serif",
                            children: "Our Offerings"
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 405,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto",
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                once: true,
                                margin: "-100px"
                            },
                            variants: {
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.2
                                    }
                                }
                            },
                            children: infoCards.map((card)=>{
                                const IconComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$iconMapping$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIconComponent"])(card.icon);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$TiltCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiltCard"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: {
                                            hidden: {
                                                opacity: 0,
                                                y: 30
                                            },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.6,
                                                    ease: "easeOut"
                                                }
                                            }
                                        },
                                        className: "h-full p-8 rounded-2xl border border-ashram-amber/20 bg-ashram-sand/30 hover:bg-white hover:shadow-lg hover:border-ashram-amber/40 transition-all duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6 p-4 bg-white rounded-xl w-fit shadow-sm border border-ashram-stone/5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                    className: "w-8 h-8 text-ashram-amber"
                                                }, void 0, false, {
                                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 438,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-ashram-clay mb-3 font-serif",
                                                children: card.title
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 441,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-ashram-stone leading-relaxed",
                                                children: card.description
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 444,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 431,
                                        columnNumber: 21
                                    }, this)
                                }, card.id, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 430,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 413,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                    lineNumber: 404,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                lineNumber: 403,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-6 bg-white overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-10",
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
                                    transition: {
                                        duration: 0.8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-ashram-amber font-medium tracking-wider uppercase text-sm",
                                            children: aboutContent?.aboutBadge || "Discover"
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 467,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-serif text-4xl md:text-5xl font-bold text-ashram-clay mt-2 mb-6",
                                            children: aboutContent?.aboutTitle || "Why Visit the Gujarat Ashram?"
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 470,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-ashram-stone/70 text-lg leading-relaxed",
                                            children: aboutContent?.aboutDescription || "Experience a calm environment filled with wisdom and transformative meditation practices. Our programs are designed for all levels, from beginners to advanced practitioners, providing a path to inner silence and outer dynamism."
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 473,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 461,
                                    columnNumber: 13
                                }, this),
                                galleryImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "grid grid-cols-2 gap-4",
                                    initial: "hidden",
                                    whileInView: "visible",
                                    viewport: {
                                        once: true
                                    },
                                    variants: {
                                        hidden: {},
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.1
                                            }
                                        }
                                    },
                                    children: galleryImages.slice(0, 4).map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            variants: {
                                                hidden: {
                                                    opacity: 0,
                                                    scale: 0.8
                                                },
                                                visible: {
                                                    opacity: 1,
                                                    scale: 1,
                                                    transition: {
                                                        duration: 0.5
                                                    }
                                                }
                                            },
                                            whileHover: {
                                                scale: 1.05,
                                                transition: {
                                                    duration: 0.4
                                                }
                                            },
                                            className: "relative aspect-square overflow-hidden rounded-xl group cursor-pointer shadow-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full bg-cover bg-center",
                                                    style: {
                                                        backgroundImage: `url(${img.path})`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                    lineNumber: 502,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 493,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 480,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 459,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                transition: {
                                    duration: 0.8
                                },
                                className: "h-full flex flex-col gap-6",
                                children: [
                                    contactInfo.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-ashram-sand/30 to-white shadow-xl border border-ashram-amber/20 overflow-visible group hover:shadow-2xl transition-all duration-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-64 h-64 bg-ashram-amber/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10 group-hover:bg-ashram-amber/10 transition-colors duration-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 526,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-8",
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
                                                                    lineNumber: 532,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                lineNumber: 531,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-serif text-3xl font-bold text-ashram-clay",
                                                                        children: "Get in Touch"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                        lineNumber: 535,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-ashram-stone/60 text-sm mt-1",
                                                                        children: "We're here to help you on your journey"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                        lineNumber: 536,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                lineNumber: 534,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                        lineNumber: 530,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 gap-4",
                                                        children: [
                                                            contactInfo.filter((info)=>info.type === "address").map((address)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mb-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-bold text-ashram-clay flex items-center gap-2 mb-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                                                                    className: "w-4 h-4 text-ashram-amber"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                                    lineNumber: 546,
                                                                                    columnNumber: 30
                                                                                }, this),
                                                                                "Visit Us"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                            lineNumber: 545,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-ashram-stone text-sm leading-relaxed mb-3",
                                                                            children: address.value
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                            lineNumber: 549,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        address.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                            whileHover: {
                                                                                scale: 1.02
                                                                            },
                                                                            whileTap: {
                                                                                scale: 0.98
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                variant: "outline",
                                                                                size: "sm",
                                                                                className: "w-full text-ashram-amber border-ashram-amber/30 hover:bg-ashram-amber/5",
                                                                                onClick: ()=>{
                                                                                    if (address.url && address.url.startsWith('http')) {
                                                                                        window.open(address.url, "_blank");
                                                                                    }
                                                                                },
                                                                                children: [
                                                                                    "Get Directions ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                                        className: "w-4 h-4 ml-2"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                                        lineNumber: 563,
                                                                                        columnNumber: 49
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                                lineNumber: 553,
                                                                                columnNumber: 32
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                            lineNumber: 551,
                                                                            columnNumber: 30
                                                                        }, this)
                                                                    ]
                                                                }, address.id, true, {
                                                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                    lineNumber: 544,
                                                                    columnNumber: 26
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 gap-3",
                                                                children: contactInfo.filter((info)=>info.type !== "address" && info.type !== "map" && info.isActive).map((contact, idx)=>{
                                                                    const Icon = contact.type === 'phone' || contact.type === 'whatsapp' ? __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"] : __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"];
                                                                    let colorClass = "bg-ashram-amber/10 text-ashram-clay";
                                                                    if (contact.type === 'phone') colorClass = "bg-blue-100 text-blue-700";
                                                                    if (contact.type === 'whatsapp') colorClass = "bg-green-100 text-green-700";
                                                                    if (contact.type === 'email') colorClass = "bg-rose-100 text-rose-700";
                                                                    if (contact.url && contact.url.includes('http')) colorClass = "bg-violet-100 text-violet-700";
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                                        whileHover: {
                                                                            scale: 1.03,
                                                                            y: -2
                                                                        },
                                                                        whileTap: {
                                                                            scale: 0.97
                                                                        },
                                                                        onClick: ()=>contact.url && window.open(contact.url, "_blank"),
                                                                        className: "flex items-center gap-3 p-3 rounded-xl bg-white border border-ashram-stone/10 hover:border-ashram-amber/50 hover:shadow-md transition-all text-left",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `p-2 rounded-lg ${colorClass}`,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                                    lineNumber: 590,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                                lineNumber: 589,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "min-w-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-xs text-ashram-stone/50 font-medium uppercase",
                                                                                        children: contact.label
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                                        lineNumber: 593,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-sm font-semibold text-ashram-clay truncate",
                                                                                        children: contact.value
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                                        lineNumber: 594,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                                lineNumber: 592,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                        lineNumber: 582,
                                                                        columnNumber: 31
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                lineNumber: 571,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 528,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 524,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        whileHover: {
                                            scale: 1.01
                                        },
                                        className: "flex-1 min-h-[300px] rounded-3xl bg-ashram-sand overflow-hidden shadow-lg border border-ashram-stone/20 relative group",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                            src: (()=>{
                                                const mapItem = contactInfo.find((c)=>c.type === 'map');
                                                const defaultMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.6576343362677!2d73.0766288759535!3d22.253034944605156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fb092d6e35579%3A0x6280463b22337d5c!2sThe%20Art%20of%20Living%20Gujarat%20Ashram!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin";
                                                if (!mapItem || !mapItem.value) return defaultMap;
                                                const val = mapItem.value.trim();
                                                if (val.startsWith('<iframe')) {
                                                    const match = val.match(/src=["']([^"']+)["']/);
                                                    return match ? match[1] : defaultMap;
                                                }
                                                return val;
                                            })(),
                                            width: "100%",
                                            height: "100%",
                                            style: {
                                                border: 0,
                                                minHeight: '300px'
                                            },
                                            allowFullScreen: true,
                                            loading: "lazy",
                                            referrerPolicy: "no-referrer-when-downgrade",
                                            className: "transition-all duration-700 w-full h-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 610,
                                            columnNumber: 18
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 606,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                lineNumber: 515,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 514,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                    lineNumber: 456,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                lineNumber: 455,
                columnNumber: 7
            }, this),
            events.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-4 bg-ashram-sand/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-end mb-12 px-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -20
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
                                            className: "text-ashram-amber font-medium tracking-wider uppercase text-sm block mb-2",
                                            children: "Calendar"
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 649,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-bold text-ashram-clay font-serif",
                                            children: "Upcoming Events"
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 650,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 644,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "hidden md:flex gap-2 text-ashram-stone hover:text-ashram-clay",
                                    children: [
                                        "View All Events ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 655,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 654,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 643,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "grid md:grid-cols-3 gap-8",
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                once: true,
                                margin: "-50px"
                            },
                            variants: {
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.15
                                    }
                                }
                            },
                            children: events.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: {
                                        hidden: {
                                            opacity: 0,
                                            y: 30
                                        },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.5,
                                                ease: "easeOut"
                                            }
                                        }
                                    },
                                    whileHover: {
                                        y: -10
                                    },
                                    className: "bg-white p-8 rounded-2xl border border-ashram-stone/10 shadow-sm hover:shadow-xl transition-all duration-300 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-block px-3 py-1 bg-ashram-amber/10 text-ashram-amber rounded-full text-xs font-semibold mb-4",
                                            children: event.date
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 681,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-serif font-bold text-ashram-clay mb-3 group-hover:text-ashram-amber transition-colors",
                                            children: event.title
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 684,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-ashram-stone mb-6 line-clamp-2",
                                            children: event.description
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 687,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "w-full bg-ashram-clay text-white hover:bg-ashram-clay/90 group-hover:bg-ashram-amber transition-colors",
                                            children: "Register Now"
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                            lineNumber: 688,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, event.id, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                    lineNumber: 672,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 659,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 text-center md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                className: "gap-2 text-ashram-stone hover:text-ashram-clay",
                                children: [
                                    "View All Events ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 697,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                lineNumber: 696,
                                columnNumber: 16
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                            lineNumber: 695,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                    lineNumber: 642,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                lineNumber: 641,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-ashram-clay text-white pt-20 pb-10 px-6 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-5 pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                lineNumber: 708,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 w-64 h-64 bg-ashram-amber rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                lineNumber: 709,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                        lineNumber: 707,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-4 gap-12 mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-1 md:col-span-2 space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4 mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "/images/aol-logo-transparent.png",
                                                                alt: "Logo",
                                                                className: "h-16 w-auto brightness-0 invert opacity-90"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                lineNumber: 723,
                                                                columnNumber: 20
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs uppercase tracking-widest text-[#F59E0B] font-bold mb-1",
                                                                        children: "The Art of Living"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                        lineNumber: 725,
                                                                        columnNumber: 22
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-3xl font-serif font-bold leading-none",
                                                                        children: aboutContent?.footerTitle || 'Sri Sri Gujarat Ashram'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                        lineNumber: 726,
                                                                        columnNumber: 22
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                lineNumber: 724,
                                                                columnNumber: 20
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                        lineNumber: 722,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-ashram-sand/60 max-w-sm leading-relaxed text-lg",
                                                        children: aboutContent?.footerDescription || 'A sanctuary for peace, meditation, and spiritual growth in the heart of Gujarat.'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                        lineNumber: 729,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 717,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-w-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-ashram-sand/80 mb-2 block uppercase tracking-wider",
                                                        children: "Join our Newsletter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                        lineNumber: 736,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                placeholder: "Enter your email",
                                                                className: "bg-white/10 border border-white/20 rounded-lg px-4 py-2 flex-1 text-white placeholder:text-white/30 focus:outline-none focus:border-ashram-amber transition-colors"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                lineNumber: 738,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                className: "bg-ashram-amber hover:bg-ashram-amber/90 text-ashram-clay font-bold",
                                                                children: "Subscribe"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                lineNumber: 743,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                        lineNumber: 737,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 735,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 716,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-lg mb-6 text-ashram-amber",
                                                children: "Quick Links"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 752,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-3",
                                                children: footerLinks.map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: link.url,
                                                            className: "text-ashram-sand/70 hover:text-white hover:translate-x-1 transition-all inline-block",
                                                            children: link.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                            lineNumber: 756,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, i, false, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                        lineNumber: 755,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 753,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 751,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-lg mb-6 text-ashram-amber",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 766,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-3",
                                                children: contactInfo.filter((c)=>c.type !== 'map' && c.type !== 'address' && c.isActive !== false).map((contact, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2 text-ashram-sand/70",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-1.5 h-1.5 rounded-full bg-ashram-amber"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                lineNumber: 772,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-white/90",
                                                                children: [
                                                                    contact.label,
                                                                    ":"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                lineNumber: 773,
                                                                columnNumber: 23
                                                            }, this),
                                                            contact.type === 'phone' || contact.type === 'whatsapp' || contact.type === 'email' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: contact.url || '#',
                                                                className: "hover:text-ashram-amber transition-colors",
                                                                children: contact.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                lineNumber: 775,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: contact.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                                lineNumber: 779,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                        lineNumber: 771,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 767,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 765,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                lineNumber: 713,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ashram-sand/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "© 2025 Art of Living Gujarat Ashram. All rights reserved."
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 788,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-white transition-colors",
                                                children: "Privacy Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 790,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-white transition-colors",
                                                children: "Terms of Service"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                                lineNumber: 791,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                        lineNumber: 789,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                                lineNumber: 787,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                        lineNumber: 712,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
                lineNumber: 705,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/page.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(HomePage, "1oBtmasORdM7LNH5jDQPtZQm9+M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Gujarat%20Ashram%20Website%20Wrapper%20Developement_ashram-nextjs_bc7663c6._.js.map