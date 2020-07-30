import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import WeddingDate from "../components/WeddingDate";
import WeddingLocation from "../components/WeddingLocation";
import heroImage from "../static/hero-2.jpg";
import names from "../static/names.png";
import footer from "../static/footer.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import { useObjectVal } from "react-firebase-hooks/database";
import firebase from "../Firebase";
const auth = firebase.auth();
const login = async () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  await auth.signInWithRedirect(provider);
};
const logout = async () => {
  auth.signOut();
};

const activeButton =
  "font-bold w-1/3 block text-white bg-rose block my-2 mx-2 font-th p-2 rounded";
const normalButton =
  "font-bold w-1/3 block hover:text-white hover:bg-rose block my-2 mx-2 text-rose font-th p-2 border-solid border border-rose rounded";

export const WeddingReception = () => {
  const [user, authLoading, authError] = useAuthState(auth);
  const ref = user ? firebase.database().ref(`users/${user.uid}`) : null;
  const [userData, userLoading, userError] = useObjectVal(ref);
  console.log(user, userData);
  useEffect(() => {
    const answer = window.localStorage.getItem("answer");
    if (answer) {
    }
  }, []);
  useEffect(() => {
    if (user && !userLoading && (!userData || !userData.displayName)) {
      ref.update({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        guest: 0,
      });
    }
  }, [user, userData, userLoading, ref]);
  const handleRSVP = useCallback(
    async (e) => {
      if (!user) {
        window.localStorage.setItem(
          "answer",
          !e.target.value ? null : e.target.value
        );
        await login();
      } else {
        ref.update({
          answer: e.target.value,
          guest: 0,
        });
      }
    },
    [user, ref]
  );
  const handleGuest = useCallback(
    async (e) => {
      ref.update({
        guest: parseInt(e.target.value),
      });
    },
    [ref]
  );
  const handleMessage = useCallback(
    async (e) => {
      ref.update({
        message: e.target.value,
      });
    },
    [ref]
  );

  return (
    <Layout>
      <img className="w-full" src={heroImage} alt="PJBF" />
      <div className="mt-5 font-en font-bold text-sm tracking-widest text-center text-rose">
        Save the date
      </div>
      <div className="px-10 pt-8">
        <img className="mx-auto" src={names} alt="Kornkanok and Panjamapong" />
      </div>
      <div className="my-12 font-en text-rose text-center font-bold text-2xl tracking-widest">
        <div>Wedding Reception</div>
      </div>
      <MainWrapper>
        <WeddingDate date="29" />
        <div className="text-center font-en text-green py-8">
          <p className="">Saturday August 29, 2020</p>
          <p className="text-2xl font-bold">6:00pm onwards</p>
          <p className="text-rose my-3">(Cocktail reception)</p>

          {!authLoading && !userData?.answer && (
            <>
              <p className="mt-6 w-3/4 mx-auto">
                We would love to know if you can join our wedding reception.{" "}
              </p>
              <div className="flex flex-row mx-6 mt-5">
                <button
                  value="no"
                  onClick={handleRSVP}
                  className="font-bold w-1/2 block hover:text-white hover:bg-rose block my-2 mx-2 text-rose font-th p-2 border-solid border border-rose rounded"
                >
                  Can't go!
                </button>
                <button
                  value="yes"
                  onClick={handleRSVP}
                  className="font-bold w-1/2 block text-white bg-rose block my-2 mx-2 font-th p-2 rounded"
                >
                  I'll be there!
                </button>
              </div>
            </>
          )}
          {!authLoading && userData?.answer === "yes" && (
            <>
              <p className="mt-6 w-3/4 mx-auto">
                See you! Could you tell us how many guests are you bringing?
                (Excluding yourself)
              </p>
              <div className="flex flex-row mx-6 mt-5">
                <button
                  value={0}
                  onClick={handleGuest}
                  className={
                    !userData?.guest || userData?.guest === 0
                      ? activeButton
                      : normalButton
                  }
                >
                  Just me
                </button>

                <button
                  value={1}
                  onClick={handleGuest}
                  className={
                    userData?.guest === 1 ? activeButton : normalButton
                  }
                >
                  1 guest
                </button>
                <button
                  value={2}
                  onClick={handleGuest}
                  className={
                    userData?.guest === 2 ? activeButton : normalButton
                  }
                >
                  2 guests
                </button>
              </div>
              <div className="flex flex-row mx-6 mt-5">
                <button
                  value={null}
                  onClick={handleRSVP}
                  className="w-full block my-2 mx-2 text-rose font-th p-2"
                >
                  Change my answer
                </button>
              </div>
            </>
          )}
          {!authLoading && userData?.answer === "no" && (
            <>
              <p className="mt-6 w-3/4 mx-auto">
                It's too bad you can't join us! Instead, you can set leave us a
                message below
              </p>
              <div className="flex flex-row mx-6 mt-5">
                <textarea
                  onChange={handleMessage}
                  value={userData.message}
                  className="w-full h-40 p-4 border border-solid border-lightGreen rounded"
                ></textarea>
              </div>
              {userData.message.length > 3 && (
                <p className="mt-6 w-3/4 mx-auto text-lightGreen">
                  Your message is auto-saved!
                </p>
              )}

              <div className="flex flex-row mx-6 mt-5">
                <button
                  value={null}
                  onClick={handleRSVP}
                  className="w-full block hover:text-white hover:bg-rose block my-2 mx-2 text-rose font-th p-2 border-solid border border-rose rounded"
                >
                  I can now join the event!
                </button>
              </div>
            </>
          )}
        </div>
        <div className="wedding-location-wrapper">
          <WeddingLocation date="29" />
        </div>

        <div className="mt-4 px-8 py-2 text-green font-th">
          Dress code is not specified.
        </div>
        <div className="font-en mt-12 mb-8 text-xs text-green font-normal text-center">
          #PJBFGoLive2020
        </div>
        <img src={footer} alt="Kornkanok and Panjamapong" />
      </MainWrapper>
    </Layout>
  );
};

const MainWrapper = styled.div`
  .wedding-name-wrapper {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .wedding-name {
    font-family: Anuphan;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    text-align: center;

    color: #e0a083;
  }

  .wedding-date {
    margin-top: 26px;
    margin-bottom: 26px;

    font-family: Anuphan;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    text-align: center;

    color: #264a39;
  }

  .wedding-location-wrapper {
    margin-left: 34px;
    margin-right: 34px;
  }
`;
