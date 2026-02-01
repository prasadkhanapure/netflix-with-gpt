import { useDispatch, useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondoryContainer from "./SecondoryContainer";
import useIdleLogout from "../hooks/useIdleLogout";
import { addUser } from "../store/userSlice";
import { supabase } from "../utils/supabaseClient";
import { useEffect } from "react";

const Browse = () => {
  const showGptSearch = useSelector((store: any) => store.gpt.showGptSearch);
  const user = useSelector((store: any) => store.user);
  const dispatch = useDispatch();

  useIdleLogout(!!user); // Hooks can't be called conditionally, React won't allow it.

  useEffect(() => {
    const restoreSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        dispatch(
          addUser({
            uid: session.user.id,
            email: session.user.email,
            displayName: session.user.user_metadata?.full_name ?? null,
          }),
        );
      }
    };
    restoreSession();
  }, []);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondoryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
