//кастомный хук
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector //используем метод редакс и передаем туда рутСтейт
