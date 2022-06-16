import { useCallback } from "react";

const useLocalStorage = () => {
    const setSession = useCallback((dados: {}, collection: string) => {
        localStorage.setItem(collection, JSON.stringify(dados!));
    }, [])

    const getSessionItem = useCallback((dado: string, collection: string) => {
        const dados = JSON.parse(localStorage.getItem(collection)!);

        return (dados) ? dados[dado] : 'Sessão não gravada!';
    }, [])

    const getSession = useCallback((collection: string) => {
        const dados = JSON.parse(localStorage.getItem(collection)!);

        return (dados) ? dados : null;
    }, [])

    const clearSession = useCallback(() => {
        localStorage.clear();
    }, [])

    return {
        setSession,
        getSessionItem,
        getSession,
        clearSession,
    };
};

export default useLocalStorage;