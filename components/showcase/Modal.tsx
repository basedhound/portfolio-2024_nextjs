"use client";
import { useState } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import styles from "./modal.module.scss";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  img: string;
  code: string;
  link: string;
  tech: string[];
  modal: JSX.Element;
}

export const Modal = ({
  modal,
  link,
  setIsOpen,
  img,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  // Blur imgs
  const [isImageLoading, setImageLoading] = useState(true)

  const content = (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}>
      <button className={styles.closeModalBtn} onClick={() => setIsOpen(false)}>
        <MdClose />
      </button>
        <Link href={link} target="_blank">
          <Image
            priority
            src={img}
            alt={`An image of the ${title} project.`}
            width={1280}
            height={720}
            onLoad={() => setImageLoading(false)}
            className={`${styles.modalImage} ${isImageLoading ? 'blur' : 'remove-blur'}`}
          />
        </Link>
        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <div className={styles.modalTech}>{tech.join(" - ")}</div>
          <div className={styles.suppliedContent}>{modal}</div>
          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Links<span>.</span>
            </p>
            <div className={styles.spaceBetween}>
              <div className={styles.links}>
                <Link target="_blank" rel="nofollow" href={code}>
                  <AiFillGithub />
                  Code
                </Link>
                <Link target="_blank" rel="nofollow" href={link}>
                  <AiOutlineExport />
                  Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
