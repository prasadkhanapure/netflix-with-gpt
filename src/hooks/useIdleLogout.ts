import { useEffect, useRef } from "react";
import { supabase } from "../utils/supabaseClient";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/userSlice";
import { IDLE_TIMEOUT } from "../utils/constants";

const useIdleLogout = () => {
  const dispatch = useDispatch();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const logout = async () => {
    await supabase.auth.signOut();
    dispatch(removeUser());
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(logout, IDLE_TIMEOUT);
  };

  useEffect(() => {
    const events = ["mousemove", "keydown", "scroll", "click", "touchstart"];
    events.forEach((event) => window.addEventListener(event, resetTimer));
    resetTimer();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, []);
};

export default useIdleLogout;
