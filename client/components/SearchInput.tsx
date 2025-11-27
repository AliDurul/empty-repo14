'use client';

import { useEffect, useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { LuSearch } from "react-icons/lu";
import { useUrlParams } from "@/hooks/useUrlParams";

export default function SearchInput() {
    const { updateUrlParams, getParam, hasParam } = useUrlParams();

    // Initialize from URL params to avoid hydration mismatch
    const [query, setQuery] = useState(() => getParam("q", "") || "");

    useEffect(() => {
        const delayBounceFn = setTimeout(() => {
            if (query) {
                updateUrlParams({ q: query, page: null }, { debounce: 0, replace: true });
            } else {
                if (hasParam("q")) {
                    updateUrlParams({ q: null, page: null }, { debounce: 0, replace: true });
                }
            }
        }, 500);

        return () => clearTimeout(delayBounceFn);
    }, [query, updateUrlParams, hasParam]);

    return (
        <div className='hidden md:flex flex-1 max-w-2xl'>
            <InputGroup>
                <InputGroupInput onChange={(e) => setQuery(e.target.value)} value={query} placeholder="Search..." />
                <InputGroupAddon>
                    <LuSearch />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
            </InputGroup>
        </div>
    )
}
