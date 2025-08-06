import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

export default function SocialIcons() {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    fetch("/assets/data/social.json")
      .then((res) => res.json())
      .then((data) => setIcons(data));
  }, []);

  return (
    <div className="flex items-center gap-20 md:gap-20">
      {icons.map((item, i) => (
        <a
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="h-50 md:h-50 outline-2 md:outline-3 outline-black/15 dark:outline-white/15 hover:outline-primary/50 cursor-pointer aspect-square hover:scale-90 transition-all bg-black/10 dark:bg-white/10 flex hover:dark:bg-white/30 hover:bg-black/10 justify-center items-center rounded-full"
        >
          <FontAwesomeIcon className="scale-150 md:scale-150 dark:text-white" icon={["fab", item.name]} />
        </a>
      ))}
    </div>
  );
}
