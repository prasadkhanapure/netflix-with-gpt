import { useCallback, useEffect, useRef } from "react";
import { supabase } from "../utils/supabaseClient";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/userSlice";
import { IDLE_TIMEOUT } from "../utils/constants";

const useIdleLogout = (enabled: boolean) => {
  const dispatch = useDispatch();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const logout = useCallback(async () => {
    await supabase.auth.signOut();
    dispatch(removeUser());
  },[dispatch]);

  const resetTimer = () => {
    timerRef.current && clearTimeout(timerRef.current);
    timerRef.current = setTimeout(logout, IDLE_TIMEOUT);
  };

  useEffect(() => {
    if (!enabled) return;

    const events = ["mousemove", "click", "scroll", "keydown", "touchstart"];
    events.forEach((event) => window.addEventListener(event, resetTimer));
    resetTimer();

    return () => {
      timerRef.current && clearTimeout(timerRef.current);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [enabled]);
};

export default useIdleLogout;
