import React from "react";
import styles from "./page.module.css";

export const isYouTubeEmbeddable = (url: string): string => {
  try {
    const embedId = String(url).split("?v=")[1].split("&")[0];
    return embedId;
  } catch (e) {
    // console.error("This is not an embeddable Youtube URL.");
    return "";
  }
};

export const isVimeoEmbeddable = (url: string): string => {
  try {
    const embedId = String(url).split("vimeo.com/")[1].split("/")[0];
    return embedId;
  } catch (e) {
    // console.error("This is not an embeddable Vimeo URL.");
    return "";
  }
};

export const isEmbeddable = (url: string): boolean =>
  Boolean(isYouTubeEmbeddable(url) !== "" || isVimeoEmbeddable(url) !== "");

export const YouTubeEmbed = ({
  url,
  title,
}: {
  url: string;
  title: string;
}) => {
  const embedId = isYouTubeEmbeddable(url);
  return embedId ? (
    <div className={styles.videoResponsive}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        // border="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  ) : null;
};

export const VimeoEmbed = ({ url, title }: { url: string; title: string }) => {
  const embedId = isVimeoEmbeddable(url);
  return embedId ? (
    <div className={styles.videoResponsive}>
      <iframe
        src={`https://player.vimeo.com/video/${embedId}`}
        width="640"
        height="360"
        allow="autoplay; fullscreen; picture-in-picture"
        title={title}
      />
    </div>
  ) : null;
};

export const VideoEmbed = ({ url, title }: { url: string; title: string }) =>
  isYouTubeEmbeddable(url) !== ""
    ? YouTubeEmbed({ url, title })
    : isVimeoEmbeddable(url) !== ""
      ? VimeoEmbed({ url, title })
      : null;

export default VideoEmbed;
