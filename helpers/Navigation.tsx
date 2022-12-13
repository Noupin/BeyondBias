//Third Party Imports
import { createRef } from "react";


export const homeStackNavigationRef = createRef<any>();
export function homeStackNavigate(name: string, params?: any) {
    homeStackNavigationRef.current?.navigate(name, params);
}

