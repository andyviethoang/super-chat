import type { Firestore } from "firebase/firestore";
import { collection, query, orderBy, limit } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

export function ChatRoom(db: Firestore) {
  const messageRef = collection(db, "messages");
  const q = query(messageRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(messageRef);

  return (
    <>
      <div>{messages && messages.map((msg) => <>{msg}</>)}</div>
    </>
  );
}
