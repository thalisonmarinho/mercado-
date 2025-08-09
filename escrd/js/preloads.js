
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/polyfills.DtXF2zQ8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/app.BmDo226f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/page-OnePage.xnugP_sj.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/DeliveryMethodSelectorSection.DFY68la1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useEditorShopPayNavigation.BRUFem8y.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/VaultedPayment.C0RYlvsW.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/LocalizationExtensionField.DbBy7Q4d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/ShopPayOptInDisclaimer.BRy3BpsQ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/ShipmentBreakdown.YLb0Fq0D.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/MerchandiseModal.PYXgNjXW.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/StackedMerchandisePreview.ClosYH5e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PayButtonSection.DajkxPM9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/component-ShopPayVerificationSwitch.CZW0Yi5o.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useSubscribeMessenger.cVB76cJV.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/index.CR1gqnvZ.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/app.YVWRbjK6.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/OnePage.PMX4OSBO.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/DeliveryMethodSelectorSection.DmqjTkNB.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/useEditorShopPayNavigation.DCOTvxC3.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/VaultedPayment.OxMVm7u-.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/StackedMerchandisePreview.CKAakmU8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/ShopPayVerificationSwitch.DW7NMDXG.css"];
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
        var resources = [baseURL].concat(fontPreconnectUrls);
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
  