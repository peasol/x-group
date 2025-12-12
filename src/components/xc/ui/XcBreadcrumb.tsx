import * as React from "react";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  current?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLSpanElement>) => void;
};

export type XcBreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
  separatorText?: string;
};

const XcBreadcrumb: React.FC<XcBreadcrumbProps> = ({
  items,
  className,
  separatorText,
}) => {
  return (
    <nav aria-label="breadcrumb" className={cn("xc-breadcrumb-wrap", className)}>
      <ol className="xc-breadcrumb-list">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const content = (
            <>
              {item.icon}
              <span>{item.label}</span>
            </>
          );

          if (!isLast) {
            if (item.href) {
              return (
                <li className="xc-breadcrumb-item" key={idx}>
                  <a
                    href={item.href}
                    onClick={item.onClick as any}
                    className="xc-breadcrumb-link"
                  >
                    {content}
                  </a>
                  {separatorText ? (
                    <span className="xc-breadcrumb-separator" aria-hidden="true">
                      {separatorText}
                    </span>
                  ) : null}
                </li>
              );
            }
            return (
              <li className="xc-breadcrumb-item" key={idx}>
                <span
                  role="link"
                  className="xc-breadcrumb-link"
                  onClick={item.onClick as any}
                >
                  {content}
                </span>
                {separatorText ? (
                  <span className="xc-breadcrumb-separator" aria-hidden="true">
                    {separatorText}
                  </span>
                ) : null}
              </li>
            );
          }

          return (
            <li className="xc-breadcrumb-item" key={idx} aria-current="page">
              <span className="xc-breadcrumb-page">{content}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default XcBreadcrumb;
