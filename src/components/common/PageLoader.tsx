import logoImage from "../../assets/images/Logo-transparent.png";

type PageLoaderProps = {
  isExiting: boolean;
};

export function PageLoader({ isExiting }: PageLoaderProps) {
  return (
    <div
      aria-hidden="true"
      className={`page-loader ${isExiting ? "is-exiting" : ""}`}
    >
      <div className="page-loader__panel page-loader__panel--left" />
      <div className="page-loader__panel page-loader__panel--right" />

      <div className="page-loader__grid" />
      <div className="page-loader__glow" />

      <div className="page-loader__content">
        <div className="page-loader__logo-wrap">
          <img
            alt="Roman Contractors logo"
            className="page-loader__logo"
            src={logoImage}
          />
        </div>

        <div className="page-loader__eyebrow">Built With Precision</div>

        <div className="page-loader__title-wrap">
          <div className="page-loader__title page-loader__title--outline">
            Roman
          </div>
          <div className="page-loader__title page-loader__title--solid">
            Contractors
          </div>
        </div>

        <div className="page-loader__line">
          <span className="page-loader__line-fill" />
        </div>
      </div>
    </div>
  );
}
