"use client"
import { SearchParams } from "@/types/types";
import { FC, ReactNode, createContext, useContext } from "react";



const QueryContext = createContext<SearchParams>({})

export const SearchCtxProvider : FC<{value:SearchParams, children: ReactNode}> = ({value,children}) => (<QueryContext.Provider value={value}>{children}</QueryContext.Provider>)

export const useSearhContext = () => useContext(QueryContext);