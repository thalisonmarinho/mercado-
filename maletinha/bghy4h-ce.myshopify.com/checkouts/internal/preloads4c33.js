
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/polyfills-legacy.sfMFb63z.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/app-legacy.BIsAxhl7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/pt-BR-legacy.D8Jm3Msv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.D9qEpbNW.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/DeliveryMethodSelectorSection-legacy.DBtTKX9G.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/useUiComponentsColorContrast-legacy.BNqIN_e6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.D4GtL1nq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.Dv4Vmquc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.CunihlPB.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.D6Hi-rnP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.CN0gs6QM.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.BxBzvi5a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/PayButtonSection-legacy.CfnriFCj.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch-legacy.CoUqb0s7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger-legacy.D9IaKocJ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/index-legacy.BVcDH2MT.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  