"use client";

import React, { useState, useRef, useEffect } from "react";
// import Link from "next/link";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import styles from "./index.module.css";
pdfjs.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

const PDFEmbed = ({ id, title }: { id: string; title: string }) => {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(800);
  const embedRef = useRef<HTMLDivElement>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const pdfURL = `/pdfs/${id}.pdf`;

  useEffect(() => {
    if (embedRef.current) {
      setWidth(Math.min(embedRef.current.clientWidth, 800));
    }
  }, []);

  // console.log(pageNumber);
  return (
    <div ref={embedRef} className={styles.pdfEmbed}>
      <div>
        <p>
          Download this PDF:{" "}
          <a href={pdfURL} download={`${title}.pdf`}>
            {title}.pdf
          </a>
        </p>
        <Document
          file={pdfURL}
          onLoadSuccess={onDocumentLoadSuccess}
          width={width}
        >
          <Page pageNumber={pageNumber} width={width} scale={1} />
        </Document>
        <p>
          {pageNumber > 1 && (
            <span
              className="left"
              onClick={(e) => {
                e.preventDefault();
                setPageNumber(pageNumber - 1);
              }}
            >
              ←
            </span>
          )}
          Page {pageNumber} of {numPages}
          {pageNumber < numPages && (
            <span
              className="right"
              onClick={(e) => {
                e.preventDefault();
                setPageNumber(pageNumber + 1);
              }}
            >
              →
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default PDFEmbed;
