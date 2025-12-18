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
"[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border bg-white shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ui/card.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ui/card.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ui/card.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ui/card.tsx",
        lineNumber: 41,
        columnNumber: 10
    }, this);
}
_c3 = CardContent;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardContent");
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
"[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/lib/canvasUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImage",
    ()=>createImage,
    "default",
    ()=>getCroppedImg,
    "getRadianAngle",
    ()=>getRadianAngle,
    "rotateSize",
    ()=>rotateSize
]);
const createImage = (url)=>new Promise((resolve, reject)=>{
        const image = new Image();
        image.addEventListener('load', ()=>resolve(image));
        image.addEventListener('error', (error)=>reject(error));
        image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
        image.src = url;
    });
function getRadianAngle(degreeValue) {
    return degreeValue * Math.PI / 180;
}
function rotateSize(width, height, rotation) {
    const rotRad = getRadianAngle(rotation);
    return {
        width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
        height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height)
    };
}
async function getCroppedImg(imageSrc, pixelCrop, rotation = 0, flip = {
    horizontal: false,
    vertical: false
}) {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        return null;
    }
    const rotRad = getRadianAngle(rotation);
    // calculate bounding box of the rotated image
    const { width: bBoxWidth, height: bBoxHeight } = rotateSize(image.width, image.height, rotation);
    // set canvas size to match the bounding box
    canvas.width = bBoxWidth;
    canvas.height = bBoxHeight;
    // translate canvas context to a central location to allow rotating and flipping around the center
    ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
    ctx.rotate(rotRad);
    ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
    ctx.translate(-image.width / 2, -image.height / 2);
    // draw rotated image
    ctx.drawImage(image, 0, 0);
    // croppedAreaPixels values are bounding box relative
    // extract the cropped image using these values
    const data = ctx.getImageData(pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height);
    // set canvas width to final desired crop size - this will clear existing context
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    // paste generated rotate image at the top left corner
    ctx.putImageData(data, 0, 0);
    // As a blob
    return new Promise((resolve, reject)=>{
        canvas.toBlob((file)=>{
            resolve(file);
        }, 'image/jpeg');
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// AdminDashboard.tsx - Complete admin panel migrated to Next.js App Router
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3x3$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3x3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/lib/api-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$react$2d$easy$2d$crop$2f$index$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/react-easy-crop/index.module.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$canvasUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/lib/canvasUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/@dnd-kit/core/dist/core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
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
// ============================================
// MAIN ADMIN DASHBOARD COMPONENT
// ============================================
const AdminDashboard = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("menu");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Original content states
    const [menuItems, setMenuItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [heroButtons, setHeroButtons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [footerLinks, setFooterLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // New content states
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [aboutContent, setAboutContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: "default",
        heroTitle: "",
        heroSubtitle: "",
        heroDescription: "",
        aboutTitle: "",
        aboutDescription: "",
        footerTitle: "",
        footerDescription: ""
    });
    const [infoCards, setInfoCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [contactInfo, setContactInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Images
    const [heroImages, setHeroImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [heroMobileImages, setHeroMobileImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // NEW
    const [galleryImages, setGalleryImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [imagesToDelete, setImagesToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    // Load all data on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboard.useEffect": ()=>{
            loadAllData();
        }
    }["AdminDashboard.useEffect"], []);
    async function loadAllData() {
        try {
            const [menuData, heroData, footerData, eventsData, aboutData, cardsData, contactData, heroImgs, heroMobileImgs, galleryImgs] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItemsAPI"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroButtonsAPI"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footerLinksAPI"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventsAPI"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aboutAPI"].get(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["infoCardsAPI"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactAPI"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imagesAPI"].getByCategory("hero"),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imagesAPI"].getByCategory("hero-mobile"),
                __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imagesAPI"].getByCategory("gallery")
            ]);
            setMenuItems(menuData);
            setHeroButtons(heroData);
            setFooterLinks(footerData);
            setEvents(eventsData);
            setAboutContent(aboutData);
            setInfoCards(cardsData);
            setContactInfo(contactData);
            setHeroImages(heroImgs.sort((a, b)=>(a.order || 0) - (b.order || 0)));
            setHeroMobileImages(heroMobileImgs.sort((a, b)=>(a.order || 0) - (b.order || 0))); // NEW
            setGalleryImages(galleryImgs.sort((a, b)=>(a.order || 0) - (b.order || 0)));
        } catch (error) {
            console.error("Failed to load data:", error);
            setMessage("Failed to load some data from server");
        }
    }
    // Save handler for current tab
    async function handleSave() {
        setLoading(true);
        setMessage("");
        try {
            let success = false;
            switch(tab){
                case "menu":
                    await __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItemsAPI"].update(menuItems);
                    success = true;
                    break;
                case "hero":
                    await __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroButtonsAPI"].update(heroButtons);
                    success = true;
                    break;
                case "footer":
                    await __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footerLinksAPI"].update(footerLinks);
                    success = true;
                    break;
                case "events":
                    await __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventsAPI"].updateAll(events);
                    success = true;
                    break;
                case "about":
                    await __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aboutAPI"].update(aboutContent);
                    success = true;
                    break;
                case "cards":
                    await __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["infoCardsAPI"].update(infoCards);
                    success = true;
                    break;
                case "contact":
                    // Auto-extract iframe src if user pasted full code
                    const cleanedContact = contactInfo.map((item)=>{
                        if (item.type === 'map' && item.value.trim().startsWith('<iframe')) {
                            // Extract src URL
                            const srcMatch = item.value.match(/src=["']([^"']+)["']/);
                            if (srcMatch && srcMatch[1]) {
                                console.log("Extracted map URL:", srcMatch[1]);
                                return {
                                    ...item,
                                    value: srcMatch[1]
                                };
                            }
                        }
                        return item;
                    });
                    // Update local state to show cleaned URL
                    setContactInfo(cleanedContact);
                    await __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactAPI"].update(cleanedContact);
                    success = true;
                    break;
                case "images":
                    // Delete marked images
                    if (imagesToDelete.size > 0) {
                        const deletePromises = Array.from(imagesToDelete).map((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imagesAPI"].delete(Number(id)));
                        await Promise.all(deletePromises);
                        setImagesToDelete(new Set());
                    }
                    // Update image orders
                    const allImageUpdates = [
                        ...heroImages.map((img, index)=>({
                                id: Number(img.id),
                                order: index
                            })),
                        ...heroMobileImages.map((img, index)=>({
                                id: Number(img.id),
                                order: index
                            })),
                        ...galleryImages.map((img, index)=>({
                                id: Number(img.id),
                                order: index
                            }))
                    ];
                    if (allImageUpdates.length > 0) {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imagesAPI"].reorder(allImageUpdates);
                    }
                    await loadAllData(); // Reload all data to reflect changes
                    success = true;
                    break;
            }
            if (success) {
                setMessage("✅ Changes saved successfully!");
                setTimeout(()=>setMessage(""), 3000);
            } else {
                setMessage("❌ Failed to save changes");
            }
        } catch (error) {
            setMessage("❌ Error: " + (error instanceof Error ? error.message : "Unknown error"));
        } finally{
            setLoading(false);
        }
    }
    const handleLogout = async ()=>{
        // Clear localStorage authentication
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("adminUser");
        // Navigate to login page
        router.push("/login");
    };
    // Tab configuration
    const tabs = [
        {
            id: "menu",
            label: "Menu",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"]
        },
        {
            id: "hero",
            label: "Hero Buttons",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"]
        },
        {
            id: "footer",
            label: "Footer",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"]
        },
        {
            id: "events",
            label: "Events",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
        },
        {
            id: "about",
            label: "About",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
        },
        {
            id: "cards",
            label: "Info Cards",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3x3$3e$__["Grid3x3"]
        },
        {
            id: "contact",
            label: "Contact",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"]
        },
        {
            id: "images",
            label: "Images",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-4 flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-gray-800",
                                    children: "Gujarat Ashram Admin"
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 mt-1",
                                    children: "Manage all website content from here"
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 351,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: handleLogout,
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 360,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Logout"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                            lineNumber: 355,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                    lineNumber: 346,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mb-6 bg-white p-2 rounded-lg shadow-sm border flex-wrap",
                        children: tabs.map((t)=>{
                            const Icon = t.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: tab === t.id ? "default" : "ghost",
                                onClick: ()=>setTab(t.id),
                                className: "flex-1 flex items-center justify-center gap-2 min-w-[120px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 382,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    t.label
                                ]
                            }, t.id, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 376,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "shadow-lg border-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-6",
                            children: [
                                tab === "menu" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuEditor, {
                                    items: menuItems,
                                    setItems: setMenuItems
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 394,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                tab === "hero" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroEditor, {
                                    items: heroButtons,
                                    setItems: setHeroButtons
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 399,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                tab === "footer" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterEditor, {
                                    items: footerLinks,
                                    setItems: setFooterLinks
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 404,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                tab === "events" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EventsEditor, {
                                    items: events,
                                    setItems: setEvents
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 409,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                tab === "about" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AboutEditor, {
                                    content: aboutContent,
                                    setContent: setAboutContent
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 414,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                tab === "cards" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCardsEditor, {
                                    items: infoCards,
                                    setItems: setInfoCards
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                tab === "contact" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactEditor, {
                                    items: contactInfo,
                                    setItems: setContactInfo
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 424,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                tab === "images" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageManager, {
                                    heroImages: heroImages,
                                    setHeroImages: setHeroImages,
                                    heroMobileImages: heroMobileImages,
                                    setHeroMobileImages: setHeroMobileImages,
                                    galleryImages: galleryImages,
                                    setGalleryImages: setGalleryImages,
                                    onRefresh: loadAllData,
                                    onSave: handleSave,
                                    imagesToDelete: imagesToDelete,
                                    setImagesToDelete: setImagesToDelete
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 429,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                            lineNumber: 391,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleSave,
                                disabled: loading,
                                className: "px-8 py-3 bg-orange-500 hover:bg-orange-600 disabled:opacity-50",
                                children: loading ? "Saving..." : "Save Changes"
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 447,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `ml-4 px-4 py-2 rounded-lg flex items-center ${message.includes("✅") ? "bg-green-100 text-green-700 border border-green-200" : message.includes("❌") ? "bg-red-100 text-red-700 border border-red-200" : "bg-yellow-100 text-yellow-700 border border-yellow-200"} animate-in fade-in slide-in-from-left-5`,
                                children: message
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 457,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 446,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
        lineNumber: 343,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AdminDashboard, "hKtPtRVHS5T6ci+JEDi4l/NPz8I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminDashboard;
// ============================================
// EDITOR COMPONENTS
// ============================================
// Menu Items Editor (existing)
function MenuEditor({ items, setItems }) {
    const addItem = ()=>{
        const newItem = {
            id: Date.now().toString(),
            name: "New Menu Item",
            url: "https://",
            isSpecial: false,
            variant: "default"
        };
        setItems([
            ...items,
            newItem
        ]);
    };
    const removeItem = (index)=>{
        setItems(items.filter((_, i)=>i !== index));
    };
    const updateItem = (index, field, value)=>{
        const updated = [
            ...items
        ];
        updated[index] = {
            ...updated[index],
            [field]: value
        };
        setItems(updated);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4",
                children: "Navigation Menu Items"
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 504,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 p-3 border rounded-lg bg-gray-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "flex-1 px-3 py-2 border rounded",
                                        placeholder: "Menu Name",
                                        value: item.name,
                                        onChange: (e)=>updateItem(idx, "name", e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "flex-1 px-3 py-2 border rounded",
                                        placeholder: "URL",
                                        value: item.url,
                                        onChange: (e)=>updateItem(idx, "url", e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 516,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "default",
                                        onClick: ()=>removeItem(idx),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                            lineNumber: 527,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 522,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 509,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: item.isSpecial || false,
                                                onChange: (e)=>updateItem(idx, "isSpecial", e.target.checked),
                                                className: "w-4 h-4 text-orange-600"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                lineNumber: 534,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Display as Button"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                lineNumber: 540,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 533,
                                        columnNumber: 15
                                    }, this),
                                    item.isSpecial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "px-3 py-1.5 border rounded text-sm",
                                        value: item.variant || "default",
                                        onChange: (e)=>updateItem(idx, "variant", e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "default",
                                                children: "Primary (Solid)"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                lineNumber: 552,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "outline",
                                                children: "Outline (Bordered)"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                lineNumber: 553,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "ghost",
                                                children: "Ghost (Text Only)"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                lineNumber: 554,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 547,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 532,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 508,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 506,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: addItem,
                variant: "outline",
                className: "mt-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "w-4 h-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 563,
                        columnNumber: 9
                    }, this),
                    " Add Menu Item"
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 562,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
        lineNumber: 503,
        columnNumber: 5
    }, this);
}
_c1 = MenuEditor;
// Hero Buttons Editor (existing)
function HeroEditor({ items, setItems }) {
    const addItem = ()=>{
        const newItem = {
            id: Date.now().toString(),
            name: "New Button",
            url: "https://",
            variant: "default"
        };
        setItems([
            ...items,
            newItem
        ]);
    };
    const removeItem = (index)=>{
        setItems(items.filter((_, i)=>i !== index));
    };
    const updateItem = (index, field, value)=>{
        const updated = [
            ...items
        ];
        updated[index] = {
            ...updated[index],
            [field]: value
        };
        setItems(updated);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4",
                children: "Hero Section Buttons"
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 593,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "flex-1 px-3 py-2 border rounded",
                                placeholder: "Button Text",
                                value: item.name,
                                onChange: (e)=>updateItem(idx, "name", e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 598,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "flex-1 px-3 py-2 border rounded",
                                placeholder: "URL",
                                value: item.url,
                                onChange: (e)=>updateItem(idx, "url", e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 604,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "px-3 py-2 border rounded",
                                value: item.variant,
                                onChange: (e)=>updateItem(idx, "variant", e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "default",
                                        children: "Primary"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 615,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "outline",
                                        children: "Outline"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 616,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 610,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "default",
                                onClick: ()=>removeItem(idx),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 623,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 618,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 597,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 595,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: addItem,
                variant: "outline",
                className: "mt-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "w-4 h-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 630,
                        columnNumber: 9
                    }, this),
                    " Add Hero Button"
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 629,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
        lineNumber: 592,
        columnNumber: 5
    }, this);
}
_c2 = HeroEditor;
// Footer Links Editor (existing)
function FooterEditor({ items, setItems }) {
    const addItem = ()=>{
        const newItem = {
            id: Date.now().toString(),
            label: "New Link",
            url: "https://"
        };
        setItems([
            ...items,
            newItem
        ]);
    };
    const removeItem = (index)=>{
        setItems(items.filter((_, i)=>i !== index));
    };
    const updateItem = (index, field, value)=>{
        const updated = [
            ...items
        ];
        updated[index] = {
            ...updated[index],
            [field]: value
        };
        setItems(updated);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4",
                children: "Footer Contact Links"
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 659,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "flex-1 px-3 py-2 border rounded",
                                placeholder: "Label",
                                value: item.label,
                                onChange: (e)=>updateItem(idx, "label", e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 664,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "flex-1 px-3 py-2 border rounded",
                                placeholder: "URL",
                                value: item.url,
                                onChange: (e)=>updateItem(idx, "url", e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 670,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "default",
                                onClick: ()=>removeItem(idx),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 681,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 676,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 663,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 661,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: addItem,
                variant: "outline",
                className: "mt-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "w-4 h-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 688,
                        columnNumber: 9
                    }, this),
                    " Add Footer Link"
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 687,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
        lineNumber: 658,
        columnNumber: 5
    }, this);
}
_c3 = FooterEditor;
// NEW: Events Editor
function EventsEditor({ items, setItems }) {
    const addItem = ()=>{
        const newItem = {
            id: Date.now().toString(),
            title: "New Event",
            date: "Date TBD",
            description: "Event description here",
            buttonText: "Register Now",
            buttonUrl: ""
        };
        setItems([
            ...items,
            newItem
        ]);
    };
    const removeItem = (index)=>{
        setItems(items.filter((_, i)=>i !== index));
    };
    const updateItem = (index, field, value)=>{
        const updated = [
            ...items
        ];
        updated[index] = {
            ...updated[index],
            [field]: value
        };
        setItems(updated);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4",
                children: "Upcoming Events"
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 720,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600 mb-4",
                children: "Manage events that appear on the homepage"
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 721,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "flex-1 px-3 py-2 border rounded",
                                            placeholder: "Event Title",
                                            value: item.title,
                                            onChange: (e)=>updateItem(idx, "title", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                            lineNumber: 730,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "default",
                                            onClick: ()=>removeItem(idx),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                lineNumber: 741,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                            lineNumber: 736,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 729,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "w-full px-3 py-2 border rounded",
                                    placeholder: "Date (e.g., Dec 5 - Dec 7, 2025)",
                                    value: item.date,
                                    onChange: (e)=>updateItem(idx, "date", e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 745,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: "w-full px-3 py-2 border rounded",
                                    placeholder: "Event Description",
                                    rows: 2,
                                    value: item.description,
                                    onChange: (e)=>updateItem(idx, "description", e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 752,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "flex-1 px-3 py-2 border rounded",
                                            placeholder: "Button Text",
                                            value: item.buttonText || "Register Now",
                                            onChange: (e)=>updateItem(idx, "buttonText", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                            lineNumber: 761,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "flex-1 px-3 py-2 border rounded",
                                            placeholder: "Registration URL (optional)",
                                            value: item.buttonUrl || "",
                                            onChange: (e)=>updateItem(idx, "buttonUrl", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                            lineNumber: 767,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 760,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                            lineNumber: 728,
                            columnNumber: 13
                        }, this)
                    }, idx, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 727,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 725,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: addItem,
                variant: "outline",
                className: "mt-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "w-4 h-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 780,
                        columnNumber: 9
                    }, this),
                    " Add Event"
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 779,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
        lineNumber: 719,
        columnNumber: 5
    }, this);
}
_c4 = EventsEditor;
// NEW: About Content Editor
function AboutEditor({ content, setContent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4",
                children: "About & Text Content"
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 790,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600 mb-6",
                children: "Manage all text content across the website - Hero section, About section, and Footer"
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 791,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 p-6 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-lg text-orange-900 mb-2 flex items-center gap-2",
                        children: "1️⃣ Hero Section (Top of Homepage)"
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 797,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-orange-700 mb-4",
                        children: "This appears at the very top of your homepage with the background image"
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 800,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                        children: "Main Title (Line 1)"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 806,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "w-full px-3 py-2 border rounded bg-white",
                                        placeholder: "Art of Living",
                                        value: content.heroTitle,
                                        onChange: (e)=>setContent({
                                                ...content,
                                                heroTitle: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 809,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 805,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                        children: "Subtitle (Line 2 - shown in amber color)"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 820,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "w-full px-3 py-2 border rounded bg-white",
                                        placeholder: "Gujarat Ashram",
                                        value: content.heroSubtitle,
                                        onChange: (e)=>setContent({
                                                ...content,
                                                heroSubtitle: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 823,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 819,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                        children: "Description (Below title)"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 834,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: "w-full px-3 py-2 border rounded bg-white",
                                        placeholder: "Discover a sanctuary for inner peace...",
                                        rows: 2,
                                        value: content.heroDescription,
                                        onChange: (e)=>setContent({
                                                ...content,
                                                heroDescription: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 837,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 833,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 804,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 796,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-lg text-green-900 mb-2 flex items-center gap-2",
                        children: '2️⃣ About Section ("Why Visit")'
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 852,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-green-700 mb-4",
                        children: "This appears in the middle of the homepage next to the gallery images"
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 855,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                        children: "Small Badge Text (Optional - shown in amber)"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 861,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "w-full px-3 py-2 border rounded bg-white",
                                        placeholder: "Discover",
                                        value: content.aboutBadge || "",
                                        onChange: (e)=>setContent({
                                                ...content,
                                                aboutBadge: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 864,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 860,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                        children: "Section Title"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 875,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "w-full px-3 py-2 border rounded bg-white",
                                        placeholder: "Why Visit the Gujarat Ashram?",
                                        value: content.aboutTitle,
                                        onChange: (e)=>setContent({
                                                ...content,
                                                aboutTitle: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 878,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 874,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 889,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: "w-full px-3 py-2 border rounded bg-white",
                                        placeholder: "Experience a calm environment filled with wisdom...",
                                        rows: 4,
                                        value: content.aboutDescription,
                                        onChange: (e)=>setContent({
                                                ...content,
                                                aboutDescription: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 892,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 888,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                        children: "Video URL (Optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 904,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "w-full px-3 py-2 border rounded bg-white",
                                        placeholder: "https://youtube.com/...",
                                        value: content.videoUrl || "",
                                        onChange: (e)=>setContent({
                                                ...content,
                                                videoUrl: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 907,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 903,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 859,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 851,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-lg text-blue-900 mb-2 flex items-center gap-2",
                        children: "3️⃣ Footer Section (Bottom of Page)"
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 921,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-blue-700 mb-4",
                        children: "This appears at the bottom of every page in the footer area"
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 924,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                        children: "Footer Title"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 930,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "w-full px-3 py-2 border rounded bg-white",
                                        placeholder: "Gujarat Ashram",
                                        value: content.footerTitle,
                                        onChange: (e)=>setContent({
                                                ...content,
                                                footerTitle: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 933,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 929,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                        children: "Footer Description"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 944,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: "w-full px-3 py-2 border rounded bg-white",
                                        placeholder: "A sanctuary for peace, meditation, and spiritual growth...",
                                        rows: 3,
                                        value: content.footerDescription,
                                        onChange: (e)=>setContent({
                                                ...content,
                                                footerDescription: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 947,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 943,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 928,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 920,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
        lineNumber: 789,
        columnNumber: 5
    }, this);
}
_c5 = AboutEditor;
// NEW: Info Cards Editor
function InfoCardsEditor({ items, setItems }) {
    const addItem = ()=>{
        const newItem = {
            id: Date.now().toString(),
            title: "New Feature",
            description: "Description here",
            icon: "Home"
        };
        setItems([
            ...items,
            newItem
        ]);
    };
    const removeItem = (index)=>{
        setItems(items.filter((_, i)=>i !== index));
    };
    const updateItem = (index, field, value)=>{
        const updated = [
            ...items
        ];
        updated[index] = {
            ...updated[index],
            [field]: value
        };
        setItems(updated);
    };
    const iconOptions = [
        "Home",
        "Users",
        "MapPin",
        "Calendar",
        "Heart",
        "Star",
        "Sun",
        "Moon",
        "Mountain",
        "Trees",
        "Flower",
        "Coffee",
        "ImageIcon"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4",
                children: "Info Cards / Facilities"
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1003,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600 mb-4",
                children: "Manage the feature cards that appear on the homepage. Colors auto-assign in rotation: Orange → Green → Blue."
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1004,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-blue-900 mb-2 flex items-center gap-2",
                        children: "Card Colors"
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 1010,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-blue-800",
                        children: [
                            "Cards automatically cycle through colors:",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex gap-2 ml-2 mt-1 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs",
                                        children: "1st - Orange"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 1016,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-1 bg-green-100 text-green-700 rounded text-xs",
                                        children: "2nd - Green"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 1017,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs",
                                        children: "3rd - Blue"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 1018,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs",
                                        children: "4th - Orange"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 1019,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-blue-700",
                                        children: "etc..."
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 1020,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 1015,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 1013,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1009,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "px-3 py-2 border rounded",
                                            value: item.icon,
                                            onChange: (e)=>updateItem(idx, "icon", e.target.value),
                                            children: iconOptions.map((icon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: icon,
                                                    children: icon
                                                }, icon, false, {
                                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                    lineNumber: 1036,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                            lineNumber: 1030,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "flex-1 px-3 py-2 border rounded",
                                            placeholder: "Card Title",
                                            value: item.title,
                                            onChange: (e)=>updateItem(idx, "title", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                            lineNumber: 1041,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "default",
                                            onClick: ()=>removeItem(idx),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                lineNumber: 1052,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                            lineNumber: 1047,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 1029,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: "w-full px-3 py-2 border rounded",
                                    placeholder: "Card Description",
                                    rows: 2,
                                    value: item.description,
                                    onChange: (e)=>updateItem(idx, "description", e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 1056,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                            lineNumber: 1028,
                            columnNumber: 13
                        }, this)
                    }, idx, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 1027,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1025,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: addItem,
                variant: "outline",
                className: "mt-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "w-4 h-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 1071,
                        columnNumber: 9
                    }, this),
                    " Add Info Card"
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1070,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
        lineNumber: 1002,
        columnNumber: 5
    }, this);
}
_c6 = InfoCardsEditor;
// NEW: Contact Info Editor
function ContactEditor({ items, setItems }) {
    // Separate Map item from others
    const mapItem = items.find((i)=>i.type === 'map');
    const otherItems = items.filter((i)=>i.type !== 'map');
    const addMap = ()=>{
        if (mapItem) return;
        const newMap = {
            id: Date.now().toString(),
            type: "map",
            label: "Map Location",
            value: "",
            url: ""
        };
        setItems([
            newMap,
            ...items
        ]);
    };
    const addItem = ()=>{
        const newItem = {
            id: Date.now().toString(),
            type: "phone",
            label: "New Contact",
            value: "",
            url: ""
        };
        setItems([
            ...items,
            newItem
        ]);
    };
    const removeItem = (id)=>{
        setItems(items.filter((i)=>i.id !== id));
    };
    const updateItem = (id, field, value)=>{
        setItems(items.map((item)=>item.id === id ? {
                ...item,
                [field]: value
            } : item));
    };
    const typeOptions = [
        {
            value: "phone",
            label: "Phone",
            color: "bg-blue-100 text-blue-800"
        },
        {
            value: "whatsapp",
            label: "WhatsApp",
            color: "bg-green-100 text-green-800"
        },
        {
            value: "email",
            label: "Email",
            color: "bg-rose-100 text-rose-800"
        },
        {
            value: "website",
            label: "Website",
            color: "bg-violet-100 text-violet-800"
        },
        {
            value: "address",
            label: "Address",
            color: "bg-gray-100 text-gray-800"
        },
        {
            value: "other",
            label: "Other",
            color: "bg-gray-100 text-gray-800"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4",
                children: "Contact Information"
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 p-4 bg-slate-50 border rounded-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "w-5 h-5 text-ashram-clay"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 1131,
                                        columnNumber: 13
                                    }, this),
                                    "Location Map"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 1130,
                                columnNumber: 11
                            }, this),
                            !mapItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                onClick: addMap,
                                className: "bg-ashram-clay text-white",
                                children: "Enable Map"
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 1135,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 1129,
                        columnNumber: 9
                    }, this),
                    mapItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-50 p-3 rounded-lg border border-blue-100 text-sm text-blue-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "block mb-1",
                                        children: "How to get this link:"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 1144,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "list-decimal list-inside space-y-1 ml-1 text-blue-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Go to Google Maps and search for your location"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                lineNumber: 1146,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "Click the ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Share"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                        lineNumber: 1147,
                                                        columnNumber: 32
                                                    }, this),
                                                    " button"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                lineNumber: 1147,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "Select the ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Embed a map"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                        lineNumber: 1148,
                                                        columnNumber: 33
                                                    }, this),
                                                    " tab"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                lineNumber: 1148,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "Click ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Copy HTML"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                        lineNumber: 1149,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                lineNumber: 1149,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: 'Paste the full code below (we will protectively extract just the source URL automatically on save, or you can paste just the URL inside src="...").'
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                lineNumber: 1150,
                                                columnNumber: 18
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 1145,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 1143,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 font-medium",
                                children: "Paste Google Maps Embed Source URL:"
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 1154,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "flex-1 px-3 py-2 border rounded font-mono text-sm",
                                        placeholder: "https://www.google.com/maps/embed?...",
                                        value: mapItem.value,
                                        onChange: (e)=>updateItem(mapItem.id, "value", e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 1158,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: ()=>removeItem(mapItem.id),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-4 h-4 text-red-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                            lineNumber: 1165,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 1164,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 1157,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 1142,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400 italic",
                        children: "No map configured. Click 'Enable Map' to add one."
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 1170,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold mb-3",
                children: "Contact Channels"
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: otherItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "px-3 py-2 border rounded w-1/3",
                                            value: item.type,
                                            onChange: (e)=>updateItem(item.id, "type", e.target.value),
                                            children: typeOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: opt.value,
                                                    children: opt.label
                                                }, opt.value, false, {
                                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                    lineNumber: 1187,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                            lineNumber: 1181,
                                            columnNumber: 18
                                        }, this),
                                        (()=>{
                                            const opt = typeOptions.find((o)=>o.value === item.type);
                                            return opt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `px-3 py-2 rounded text-xs font-semibold flex items-center ${opt.color}`,
                                                children: [
                                                    opt.label,
                                                    " Color"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                lineNumber: 1197,
                                                columnNumber: 22
                                            }, this) : null;
                                        })(),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "flex-1 px-3 py-2 border rounded",
                                            placeholder: "Label (e.g. Office)",
                                            value: item.label,
                                            onChange: (e)=>updateItem(item.id, "label", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                            lineNumber: 1203,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 1180,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "flex-1 px-3 py-2 border rounded",
                                            placeholder: "Display Value (e.g. +91 999...)",
                                            value: item.value,
                                            onChange: (e)=>updateItem(item.id, "value", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                            lineNumber: 1212,
                                            columnNumber: 17
                                        }, this),
                                        item.type !== 'address' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "flex-1 px-3 py-2 border rounded",
                                            placeholder: "Action URL (tel:, mailto:)",
                                            value: item.url || "",
                                            onChange: (e)=>updateItem(item.id, "url", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                            lineNumber: 1220,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "default",
                                            onClick: ()=>removeItem(item.id),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                lineNumber: 1233,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                            lineNumber: 1228,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 1211,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                            lineNumber: 1179,
                            columnNumber: 13
                        }, this)
                    }, item.id, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 1178,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: addItem,
                variant: "outline",
                className: "mt-4 w-full border-dashed",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "w-4 h-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 1242,
                        columnNumber: 9
                    }, this),
                    " Add Channel"
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1241,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
        lineNumber: 1124,
        columnNumber: 5
    }, this);
}
_c7 = ContactEditor;
// Image Cropper Modal
function ImageCropper({ imageSrc, aspectRatio, onCancel, onCropComplete, uploading }) {
    _s1();
    const [crop, setCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleCropComplete = (croppedArea, croppedAreaPixels)=>{
        setCroppedAreaPixels(croppedAreaPixels);
    };
    const executeCrop = async ()=>{
        try {
            const croppedBlob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$canvasUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(imageSrc, croppedAreaPixels);
            if (croppedBlob) {
                onCropComplete(croppedBlob);
            }
        } catch (e) {
            console.error(e);
            alert("Failed to crop image");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl overflow-hidden w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-b flex justify-between items-center bg-gray-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-lg flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                        lineNumber: 1290,
                                        columnNumber: 16
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 1289,
                                    columnNumber: 13
                                }, this),
                                "Adjust Image"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                            lineNumber: 1288,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            onClick: onCancel,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5 text-gray-500 hover:text-red-500 transition-colors"
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 1295,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                            lineNumber: 1294,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                    lineNumber: 1287,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex-1 bg-neutral-900 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$react$2d$easy$2d$crop$2f$index$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        image: imageSrc,
                        crop: crop,
                        zoom: zoom,
                        aspect: aspectRatio,
                        showGrid: true,
                        onCropChange: setCrop,
                        onCropComplete: handleCropComplete,
                        onZoomChange: setZoom
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 1300,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                    lineNumber: 1299,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 bg-white border-t space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6 max-w-2xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium w-12 text-gray-600",
                                    children: "Zoom"
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 1314,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    value: zoom,
                                    min: 1,
                                    max: 3,
                                    step: 0.1,
                                    "aria-labelledby": "Zoom",
                                    onChange: (e)=>setZoom(Number(e.target.value)),
                                    className: "flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 1315,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-center font-mono text-xs bg-gray-100 px-2 py-1 rounded w-12",
                                    children: [
                                        zoom.toFixed(1),
                                        "x"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 1325,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                            lineNumber: 1313,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center bg-orange-50 p-4 rounded-lg border border-orange-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-orange-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Tip:"
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                            lineNumber: 1329,
                                            columnNumber: 17
                                        }, this),
                                        " Drag to position. Use slider to zoom. Image will be resized to HD quality."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 1328,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            onClick: onCancel,
                                            disabled: uploading,
                                            className: "border-gray-300",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                            lineNumber: 1332,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: executeCrop,
                                            disabled: uploading,
                                            className: "bg-orange-600 hover:bg-orange-700 text-white px-8",
                                            children: uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                        lineNumber: 1336,
                                                        columnNumber: 24
                                                    }, this),
                                                    "Processing..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                                lineNumber: 1335,
                                                columnNumber: 21
                                            }, this) : "Crop & Upload"
                                        }, void 0, false, {
                                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                            lineNumber: 1333,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 1331,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                            lineNumber: 1327,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                    lineNumber: 1312,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
            lineNumber: 1286,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
        lineNumber: 1285,
        columnNumber: 5
    }, this);
}
_s1(ImageCropper, "vjc7Q7LJXv8zkmhwYHP2CgCEHYg=");
_c8 = ImageCropper;
// Sortable Image Component
function SortableImage({ image, isMarkedForDelete, onDelete, onPreview, API_BASE }) {
    _s2();
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSortable"])({
        id: image.id.toString()
    });
    const style = {
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(transform),
        transition,
        zIndex: isDragging ? 50 : "auto",
        opacity: isDragging ? 0.5 : 1
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        style: style,
        className: `relative group aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-move shadow-sm hover:shadow-md transition-all ${isDragging ? "ring-2 ring-orange-500 scale-105" : ""}`,
        ...attributes,
        ...listeners,
        onClick: ()=>onPreview(`${API_BASE}${image.path}`, image.filename),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: `${API_BASE}${image.path}`,
                alt: image.filename,
                className: `w-full h-full object-cover transition-all ${isMarkedForDelete ? "grayscale opacity-50" : "group-hover:scale-105"}`
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1390,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2 left-2 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
                children: "Drag to reorder"
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1397,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `absolute top-2 right-2 p-1.5 rounded-full z-10 transition-all ${isMarkedForDelete ? "bg-green-500 text-white" : "bg-white text-red-500 opacity-0 group-hover:opacity-100"}`,
                onClick: (e)=>{
                    e.stopPropagation();
                    onDelete(image.id);
                },
                onPointerDown: (e)=>e.stopPropagation(),
                children: isMarkedForDelete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                    className: "w-4 h-4 rotate-45"
                }, void 0, false, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                    lineNumber: 1413,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                    lineNumber: 1415,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1400,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-2 right-2 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded opacity-100 pointer-events-none",
                children: [
                    "#",
                    image.order
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1420,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
        lineNumber: 1380,
        columnNumber: 5
    }, this);
}
_s2(SortableImage, "iTIyvp0X9kMGpdHRsWsr2+tGbVI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSortable"]
    ];
});
_c9 = SortableImage;
// Image Manager (Enhanced with preview modal, delete marking, and save functionality)
function ImageManager({ heroImages, setHeroImages, heroMobileImages, setHeroMobileImages, galleryImages, setGalleryImages, onRefresh, imagesToDelete, setImagesToDelete }) {
    _s3();
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cropCategory, setCropCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cropImageSrc, setCropImageSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // File inputs
    const heroFileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroMobileFileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const galleryFileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Image preview modal state
    const [previewImage, setPreviewImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Get API base URL for image paths
    const API_BASE = ("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000';
    // Sortable Sensors
    const sensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerSensor"], {
        activationConstraint: {
            distance: 8
        }
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardSensor"], {
        coordinateGetter: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortableKeyboardCoordinates"]
    }));
    // 1. Handle File Selection -> Open Cropper
    const handleFileSelect = (event, category)=>{
        const file = event.target.files?.[0];
        if (!file) return;
        // Check limit
        let currentCount = 0;
        if (category === "hero") currentCount = heroImages.length;
        else if (category === "hero-mobile") currentCount = heroMobileImages.length;
        else currentCount = galleryImages.length;
        if (currentCount >= 15) {
            alert(`Maximum limit of 15 images reached for this category.`);
            event.target.value = "";
            return;
        }
        // Read file for cropper
        const reader = new FileReader();
        reader.addEventListener("load", ()=>{
            setCropImageSrc(reader.result?.toString() || "");
            setCropCategory(category);
        });
        reader.readAsDataURL(file);
        event.target.value = ""; // reset input for next time
    };
    // 2. Handle Crop Complete -> Upload
    const handleCropComplete = async (croppedBlob)=>{
        if (!cropCategory) return;
        setUploading(true);
        try {
            // Create a file from blob
            const file = new File([
                croppedBlob
            ], `upload-${Date.now()}.jpg`, {
                type: "image/jpeg"
            });
            const uploaded = await __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imagesAPI"].upload(file, cropCategory);
            if (uploaded) {
                onRefresh();
                alert("Image uploaded successfully!");
                // Close cropper
                setCropImageSrc(null);
                setCropCategory(null);
            } else {
                alert("Failed to upload image.");
            }
        } catch (error) {
            console.error(error);
            alert("Upload failed.");
        } finally{
            setUploading(false);
        }
    };
    // Mark/unmark image for deletion
    const toggleDeleteMark = (id)=>{
        setImagesToDelete((prev)=>{
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };
    // Drag End Handler
    const handleDragEnd = (event, category)=>{
        const { active, over } = event;
        if (!over || active.id === over.id) return;
        const updateOrder = (items, setItems)=>{
            const oldIndex = items.findIndex((i)=>i.id.toString() === active.id);
            const newIndex = items.findIndex((i)=>i.id.toString() === over.id);
            const newItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayMove"])(items, oldIndex, newIndex).map((item, index)=>({
                    ...item,
                    order: index
                }));
            setItems(newItems);
        };
        if (category === "hero") {
            updateOrder(heroImages, setHeroImages);
        } else if (category === "hero-mobile") {
            updateOrder(heroMobileImages, setHeroMobileImages);
        } else if (category === "gallery") {
            updateOrder(galleryImages, setGalleryImages);
        }
    };
    const renderImageGrid = (images, setImages, title, category, onUploadClick, emptyText)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 p-4 border rounded-xl bg-gray-50/50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-gray-700 flex items-center gap-2",
                            children: [
                                title,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-normal text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full",
                                    children: [
                                        images.length,
                                        " / 15"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 1563,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                            lineNumber: 1561,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            onClick: onUploadClick,
                            disabled: uploading,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "w-4 h-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 1568,
                                    columnNumber: 13
                                }, this),
                                " Add Image"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                            lineNumber: 1567,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                    lineNumber: 1560,
                    columnNumber: 9
                }, this),
                images.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DndContext"], {
                    sensors: sensors,
                    collisionDetection: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closestCenter"],
                    onDragEnd: (e)=>handleDragEnd(e, category),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortableContext"], {
                        items: images.map((img)=>img.id.toString()),
                        strategy: __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectSortingStrategy"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                            children: images.map((img)=>{
                                const isMarked = imagesToDelete.has(img.id);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortableImage, {
                                    image: img,
                                    isMarkedForDelete: isMarked,
                                    onDelete: toggleDeleteMark,
                                    onPreview: (url, filename)=>setPreviewImage({
                                            url,
                                            filename
                                        }),
                                    API_BASE: API_BASE
                                }, img.id, false, {
                                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                    lineNumber: 1579,
                                    columnNumber: 23
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                            lineNumber: 1575,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 1574,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                    lineNumber: 1573,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-10 bg-white border-2 border-dashed border-gray-200 rounded-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                            className: "w-10 h-10 mx-auto text-gray-300 mb-2"
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                            lineNumber: 1594,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500",
                            children: emptyText
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                            lineNumber: 1595,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                    lineNumber: 1593,
                    columnNumber: 12
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
            lineNumber: 1559,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-6",
                children: "Image Management"
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1603,
                columnNumber: 7
            }, this),
            renderImageGrid(heroImages, setHeroImages, "Hero Slider (Desktop - Landscape)", "hero", ()=>heroFileInputRef.current?.click(), "No desktop hero images"),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                ref: heroFileInputRef,
                accept: "image/*",
                className: "hidden",
                onChange: (e)=>handleFileSelect(e, "hero")
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1614,
                columnNumber: 7
            }, this),
            renderImageGrid(heroMobileImages, setHeroMobileImages, "Hero Slider (Mobile - Portrait)", "hero-mobile", ()=>heroMobileFileInputRef.current?.click(), "No mobile hero images. Desktop images will be used (and cropped)."),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                ref: heroMobileFileInputRef,
                accept: "image/*",
                className: "hidden",
                onChange: (e)=>handleFileSelect(e, "hero-mobile")
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1625,
                columnNumber: 7
            }, this),
            renderImageGrid(galleryImages, setGalleryImages, "Gallery Images", "gallery", ()=>galleryFileInputRef.current?.click(), "No gallery images"),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                ref: galleryFileInputRef,
                accept: "image/*",
                className: "hidden",
                onChange: (e)=>handleFileSelect(e, "gallery")
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1636,
                columnNumber: 7
            }, this),
            imagesToDelete.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-8 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-full shadow-2xl border border-red-100 flex items-center gap-4 animate-in slide-in-from-bottom-10 z-40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                            lineNumber: 1642,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 1641,
                        columnNumber: 12
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-gray-800",
                                children: [
                                    imagesToDelete.size,
                                    " images marked for deletion"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 1645,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: "Click Save Changes to verify"
                            }, void 0, false, {
                                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                                lineNumber: 1646,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                        lineNumber: 1644,
                        columnNumber: 12
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1640,
                columnNumber: 9
            }, this),
            cropImageSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageCropper, {
                imageSrc: cropImageSrc,
                aspectRatio: cropCategory === "hero-mobile" ? 9 / 16 : 16 / 9,
                onCancel: ()=>{
                    setCropImageSrc(null);
                    setCropCategory(null);
                },
                onCropComplete: handleCropComplete,
                uploading: uploading
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1653,
                columnNumber: 9
            }, this),
            previewImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4",
                onClick: ()=>setPreviewImage(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: previewImage.url,
                    alt: "Preview",
                    className: "max-w-full max-h-[90vh] object-contain rounded"
                }, void 0, false, {
                    fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                    lineNumber: 1668,
                    columnNumber: 12
                }, this)
            }, void 0, false, {
                fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
                lineNumber: 1667,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Gujarat Ashram Website Wrapper Developement/ashram-nextjs/app/admin/page.tsx",
        lineNumber: 1602,
        columnNumber: 5
    }, this);
}
_s3(ImageManager, "migeaXkhbmR1tl7wVRDH0JZ/NRQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Gujarat__Ashram__Website__Wrapper__Developement$2f$ashram$2d$nextjs$2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensors"]
    ];
});
_c10 = ImageManager;
const __TURBOPACK__default__export__ = AdminDashboard;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "AdminDashboard");
__turbopack_context__.k.register(_c1, "MenuEditor");
__turbopack_context__.k.register(_c2, "HeroEditor");
__turbopack_context__.k.register(_c3, "FooterEditor");
__turbopack_context__.k.register(_c4, "EventsEditor");
__turbopack_context__.k.register(_c5, "AboutEditor");
__turbopack_context__.k.register(_c6, "InfoCardsEditor");
__turbopack_context__.k.register(_c7, "ContactEditor");
__turbopack_context__.k.register(_c8, "ImageCropper");
__turbopack_context__.k.register(_c9, "SortableImage");
__turbopack_context__.k.register(_c10, "ImageManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Gujarat%20Ashram%20Website%20Wrapper%20Developement_ashram-nextjs_6ad24aaa._.js.map