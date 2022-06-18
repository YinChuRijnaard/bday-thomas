import { useEffect, useState } from "react";

export const useCheckBirthday = () => {
  const [date, setDate] = useState(new Date());
  const [birthday, setBirthday] = useState(false);

  useEffect(() => {
    const todaysDate = date.getDate();
    const todaysMonth = date.getMonth();

    if (todaysDate === 22 && todaysMonth === 6) {
      setBirthday(!birthday);
    }
  }, []);

  return birthday;
};

// Double check with someone more experienced if this is correct
