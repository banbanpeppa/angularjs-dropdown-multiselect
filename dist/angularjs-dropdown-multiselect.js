! function (e) {
    function t(l) {
        if (n[l]) return n[l].exports;
        var o = n[l] = {
            exports: {},
            id: l,
            loaded: !1
        };
        return e[l].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    } // webpackBootstrap
    /******/
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
    "use strict";

    function l(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var o = n(1),
        s = l(o);
    angular.module("angularjs-dropdown-multiselect", []).directive("dmDropdownStaticInclude", ["$compile",
        function (e) {
            "ngInject";
            return function (t, n, l) {
                var o = l.dmDropdownStaticInclude,
                    s = n.html(o).contents();
                e(s)(t)
            }
        }]).directive("ngDropdownMultiselect", s["default"])
}, function (e, t, n) {
    "use strict";

    function l(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o() {
        return {
            restrict: "AE",
            scope: {
                selectedModel: "=",
                options: "=",
                extraSettings: "=",
                events: "=",
                searchFilter: "=?",
                translationTexts: "=",
                disabled: "="
            },
            transclude: {
                toggleDropdown: "?toggleDropdown"
            },
            controller: i["default"],
            templateUrl: "app/component/angularjs-dropdown-multiselect.html"
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = o;
    var s = n(2),
        i = l(s)
}, function (e, t) {
    "use strict";

    function n(e, t) {
        var n = !1;
        return e.some(function (e) {
            return e === t ? (n = !0, !0) : !1
        }), n
    }

    function l(e, t, n) {
        var l = -1;
        return e.some(function (e, o) {
            return e[n] === t[n] ? (l = o, !0) : !1
        }), l
    }

    function o(e, t, o, s) {
        "ngInject";

        function i() {
            setTimeout(function () {
                var e = angular.element(t)[0].querySelector(".option");
                angular.isDefined(e) && null != e && e.focus()
            }, 0)
        }

        function r() {
            e.open ? e.close() : e.open = !0, e.settings.keyboardControls && e.open && (1 === e.settings.selectionLimit &&
                e.settings.enableSearch ? setTimeout(function () {
                    angular.element(t)[0].querySelector(".searchField").focus()
                }, 0) : i()), e.settings.enableSearch && e.open && setTimeout(function () {
                angular.element(t)[0].querySelector(".searchField").focus()
            }, 0)
        }

        function c(t, n) {
            e.setSelectedItem(n, !1, !0), t.stopImmediatePropagation()
        }

        function a() {
            e.open = !1, e.input.searchFilter = e.settings.clearSearchOnClose ? "" : e.input.searchFilter, e.externalEvents
                .onClose()
        }

        function d(t) {
            e.selectedModel.splice(0, e.selectedModel.length), e.options.forEach(function (n) {
                n[e.settings.groupBy] === t && e.setSelectedItem(n, !1, !1)
            }), e.externalEvents.onSelectionChanged()
        }

        function u(t) {
            return null !== e.settings.groupByTextProvider ? e.settings.groupByTextProvider(t) : t
        }

        function g(e) {
            var n = t.find("button"),
                l = document.createElement("canvas"),
                o = l.getContext("2d");
            return o.font = n.css("font-size") + n.css("font-family"), o.originalFont = n.css("font-size") + n.css(
                "font-family"), o.fillStyle = "#000000", o.measureText(e).width
        }

        function p() {
            if (e.settings.dynamicTitle && e.selectedModel && e.selectedModel.length > 0) {
                if (angular.isFunction(e.settings.smartButtonTextProvider)) return e.settings.smartButtonTextProvider(
                    e.selectedModel);
                if (e.settings.smartButtonMaxItems > 0) {
                    var n = 24,
                        l = 2,
                        o = 8,
                        s = t[0].offsetWidth - n - l - o,
                        i = [];
                    angular.forEach(e.options, function (t) {
                        if (e.isChecked(t)) {
                            var n = e.getPropertyForObject(t, e.settings.displayProp),
                                l = e.settings.smartButtonTextConverter(n, t);
                            i.push(l || n)
                        }
                    }), e.selectedModel.length > e.settings.smartButtonMaxItems && (i = i.slice(0, e.settings
                        .smartButtonMaxItems), i.push("..."));
                    var r = i.join(", "),
                        c = r.length - 4;
                    if (0 === t[0].offsetWidth) return r;
                    if (s <= g("...")) return "...";
                    for (; g(r) > s;) "..." !== i[i.length - 1] && (i.push("..."), r += "...", c = r.length - 4),
                        r = r.slice(0, c) + r.slice(c + 1), c -= 1;
                    return r
                }
                var a = angular.isDefined(e.selectedModel) ? e.selectedModel.length : 0;
                return 0 === a ? e.texts.buttonDefaultText : e.settings.showAllSelectedText && a === e.options.length ?
                    e.texts.allSelectedText : a + " " + e.texts.dynamicButtonTextSuffix
            }
            return e.texts.buttonDefaultText
        }

        function h(e, t) {
            return angular.isDefined(e) && Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0
        }

        function f() {
            e.deselectAll(!0), e.externalEvents.onSelectAll();
            var t = o("filter")(e.options, e.getFilter(e.input.searchFilter));
            angular.forEach(t, function (t) {
                e.setSelectedItem(t, !0, !1)
            }), e.externalEvents.onSelectionChanged(), e.selectedGroup = null
        }

        function m() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1;
            t || e.externalEvents.onDeselectAll(), e.selectedModel.splice(0, e.selectedModel.length), t || e.externalEvents
                .onSelectionChanged(), e.selectedGroup = null
        }

        function y(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
                o = arguments[2],
                s = void 0,
                i = void 0;
            angular.isDefined(A.idProperty) ? (s = -1 !== l(e.selectedModel, t, A.idProperty), i = l(e.selectedModel,
                    t, A.idProperty)) : (s = -1 !== e.selectedModel.indexOf(t), i = e.selectedModel.indexOf(t)),
                !n && s ? (e.selectedModel.splice(i, 1), e.externalEvents.onItemDeselect(t), e.settings.closeOnDeselect &&
                    e.close()) : !s && (0 === e.settings.selectionLimit || e.selectedModel.length < e.settings.selectionLimit) ?
                (e.selectedModel.push(t), o && e.externalEvents.onItemSelect(t), e.settings.closeOnSelect && e.close(),
                    e.settings.selectionLimit > 0 && e.selectedModel.length === e.settings.selectionLimit && e.externalEvents
                    .onMaxSelectionReached()) : 1 !== e.settings.selectionLimit || s || e.selectedModel.length !==
                e.settings.selectionLimit || (e.selectedModel.splice(0, 1), e.selectedModel.push(t), o && e.externalEvents
                    .onItemSelect(t), e.settings.closeOnSelect && e.close()), o && e.externalEvents.onSelectionChanged(),
                e.selectedGroup = null
        }

        function v(t) {
            return angular.isDefined(A.idProperty) ? -1 !== l(e.selectedModel, t, A.idProperty) : -1 !== e.selectedModel
                .indexOf(t)
        }

        function k(t) {
            var n = angular.element(t.target).scope(),
                l = void 0,
                o = t.target.parentNode;
            if (e.settings.keyboardControls)
                if (13 === t.keyCode || 32 === t.keyCode) t.preventDefault(), n.option ? e.setSelectedItem(n.option,
                        !1, !0) : "deselectAll" === t.target.id ? e.deselectAll() : "selectAll" === t.target.id &&
                    e.selectAll();
                else if (38 === t.keyCode) {
                for (t.preventDefault(), o.previousElementSibling && (l = o.previousElementSibling.querySelector(
                        "a") || o.previousElementSibling.querySelector("input")); !l && o;) o = o.previousElementSibling,
                    o && (l = o.querySelector("a") || o.querySelector("input"));
                l && l.focus()
            } else if (40 === t.keyCode) {
                for (t.preventDefault(), o.nextElementSibling && (l = o.nextElementSibling.querySelector("a") ||
                        o.nextElementSibling.querySelector("input")); !l && o;) o = o.nextElementSibling, o &&
                    (l = o.querySelector("a") || o.querySelector("input"));
                l && l.focus()
            } else 27 === t.keyCode && (t.preventDefault(), e.toggleDropdown())
        }

        function b(t) {
            var n = t.target.parentNode.parentNode,
                l = void 0;
            if (e.settings.keyboardControls)
                if (9 === t.keyCode || 40 === t.keyCode) t.preventDefault(), i();
                else if (38 === t.keyCode) {
                for (t.preventDefault(), n.previousElementSibling && (l = n.previousElementSibling.querySelector(
                        "a") || n.previousElementSibling.querySelector("input")); !l && n;) n = n.previousElementSibling,
                    n && (l = n.querySelector("a") || n.querySelector("input"));
                l && l.focus()
            } else 27 === t.keyCode && (t.preventDefault(), e.toggleDropdown())
        }

        function x(t, n) {
            var l = void 0;
            e.settings.keyboardControls && 13 === t.keyCode && (1 === e.settings.selectionLimit && e.settings.enableSearch ?
                (l = o("filter")(e.options, e.getFilter(n)), 1 === l.length && e.setSelectedItem(l[0], !1,
                    !0)) : e.settings.enableSearch && e.selectAll())
        }

        function S(t) {
            var n = {};
            return n[e.settings.searchField] = t, n
        }

        function w(t) {
            t && t.stopPropagation(), e.settings.enableSearch = !e.settings.enableSearch, e.settings.enableSearch ||
                (e.input.searchFilter = "")
        }

        function C() {
            e.settings.keyboardControls && 13 === event.keyCode && (e.toggleSearch(), e.settings.enableSearch ?
                setTimeout(function () {
                    angular.element(t)[0].querySelector(".searchField").focus()
                }, 0) : i())
        }

        function D(t, n) {
            if (angular.isUndefined(n)) return -1;
            if (angular.isUndefined(t)) return 1;
            if ("object" !== t.type || "object" !== n.type) return t.index < n.index ? -1 : 1;
            var l = t.value,
                o = n.value;
            return e.settings.groupBy && l[e.settings.groupBy] !== o[e.settings.groupBy] ? l[e.settings.groupBy] <
                o[e.settings.groupBy] ? 1 : -1 : e.settings.selectedToTop ? !e.isChecked(l) && !e.isChecked(o) ||
                e.isChecked(l) && e.isChecked(o) ? e.options.indexOf(l) < e.options.indexOf(o) ? -1 : 1 : e.isChecked(
                    l) ? -1 : 1 : e.options.indexOf(l) < e.options.indexOf(o) ? -1 : 1
        }
        var B = t.children()[0],
            E = {
                onItemSelect: angular.noop,
                onItemDeselect: angular.noop,
                onSelectAll: angular.noop,
                onDeselectAll: angular.noop,
                onInitDone: angular.noop,
                onMaxSelectionReached: angular.noop,
                onSelectionChanged: angular.noop,
                onClose: angular.noop
            },
            A = {
                dynamicTitle: !0,
                scrollable: !1,
                scrollableHeight: "300px",
                closeOnBlur: !0,
                displayProp: "label",
                enableSearch: !1,
                clearSearchOnClose: !1,
                selectionLimit: 0,
                showCheckAll: !0,
                showUncheckAll: !0,
                showEnableSearchButton: !1,
                closeOnSelect: !1,
                buttonClasses: "btn btn-default",
                closeOnDeselect: !1,
                groupBy: void 0,
                checkBoxes: !1,
                groupByTextProvider: null,
                smartButtonMaxItems: 0,
                smartButtonTextConverter: angular.noop,
                styleActive: !1,
                selectedToTop: !1,
                keyboardControls: !1,
                template: "{{getPropertyForObject(option, settings.displayProp)}}",
                searchField: "$",
                showAllSelectedText: !1
            },
            M = {
                checkAll: "全选",
                uncheckAll: "全不选",
                selectionCount: "checked",
                selectionOf: "/",
                searchPlaceholder: "Search...",
                buttonDefaultText: "选择",
                dynamicButtonTextSuffix: "checked",
                disableSearch: "Disable search",
                enableSearch: "Enable search",
                selectGroup: "选择全部:",
                allSelectedText: "All"
            },
            T = {
                searchFilter: e.searchFilter || ""
            };
        angular.extend(A, e.extraSettings || []), angular.extend(E, e.events || []), angular.extend(M, e.translationTexts),
            A.closeOnBlur && s.on("click", function (t) {
                if (e.open) {
                    for (var l = t.target.parentElement, o = !1; angular.isDefined(l) && null !== l && !o;)
                        l.className.split && n(l.className.split(" "), "multiselect-parent") && !o && l ===
                        B && (o = !0), l = l.parentElement;
                    o || e.$apply(function () {
                        e.close()
                    })
                }
            }), angular.extend(e, {
                toggleDropdown: r,
                checkboxClick: c,
                externalEvents: E,
                settings: A,
                texts: M,
                input: T,
                close: a,
                selectCurrentGroup: d,
                getGroupLabel: u,
                getButtonText: p,
                getPropertyForObject: h,
                selectAll: f,
                deselectAll: m,
                setSelectedItem: y,
                isChecked: v,
                keyDownLink: k,
                keyDownSearchDefault: b,
                keyDownSearch: x,
                getFilter: S,
                toggleSearch: w,
                keyDownToggleSearch: C,
                orderFunction: D
            }), e.externalEvents.onInitDone()
    }
    o.$inject = ["$scope", "$element", "$filter", "$document"], Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = o
}]), angular.module("angularjs-dropdown-multiselect").run(["$templateCache", function (e) {
    e.put("app/component/angularjs-dropdown-multiselect.html",
        '<div class="multiselect-parent btn-group dropdown-multiselect" ng-class="{open: open}"><div ng-transclude=toggleDropdown ng-click=toggleDropdown()><button ng-disabled=disabled type=button class=dropdown-toggle ng-class=settings.buttonClasses>{{getButtonText()}} <span class=caret></span></button></div><ul class="dropdown-menu dropdown-menu-form" ng-if=open ng-style="{display: open ? \'block\' : \'none\', height : settings.scrollable ? settings.scrollableHeight : \'auto\', overflow: \'auto\' }"><li ng-if="settings.showCheckAll && settings.selectionLimit === 0"><a ng-keydown=keyDownLink($event) data-ng-click=selectAll() tabindex=-1 id=selectAll><span class="glyphicon glyphicon-ok"></span> {{texts.checkAll}}</a></li><li ng-if=settings.showUncheckAll><a ng-keydown=keyDownLink($event) data-ng-click=deselectAll(); tabindex=-1 id=deselectAll><span class="glyphicon glyphicon-remove"></span> {{texts.uncheckAll}}</a></li><li ng-if="settings.selectByGroups && ((settings.showCheckAll && settings.selectionLimit > 0) || settings.showUncheckAll)" class=divider></li><li ng-repeat="currentGroup in settings.selectByGroups track by $index" ng-click=selectCurrentGroup(currentGroup)><a ng-class="{\'dropdown-selected-group\': selectedGroup === currentGroup}" tabindex=-1>{{::texts.selectGroup}} {{::getGroupLabel(currentGroup)}}</a></li><li ng-if="settings.selectByGroups && settings.showEnableSearchButton" class=divider></li><li ng-if="settings.showEnableSearchButton && settings.enableSearch"><a ng-keydown="keyDownLink($event); keyDownToggleSearch();" ng-click=toggleSearch($event); tabindex=-1>{{texts.disableSearch}}</a></li><li ng-if="settings.showEnableSearchButton && !settings.enableSearch"><a ng-keydown="keyDownLink($event); keyDownToggleSearch();" ng-click=toggleSearch($event); tabindex=-1>{{texts.enableSearch}}</a></li><li ng-if="(settings.showCheckAll && settings.selectionLimit > 0) || settings.showUncheckAll || settings.showEnableSearchButton" class=divider></li><li ng-if=settings.enableSearch><div class=dropdown-header><input type=text class="form-control searchField" ng-keydown="keyDownSearchDefault($event); keyDownSearch($event, input.searchFilter);" ng-style="{width: \'100%\'}" ng-model=input.searchFilter placeholder={{texts.searchPlaceholder}}></div></li><li ng-if=settings.enableSearch class=divider></li><li ng-if=settings.groupBy ng-repeat-start="option in orderedItems = ( options | filter:getFilter(input.searchFilter) | orderBy:\'\':false:orderFunction)" ng-show="getPropertyForObject(option, settings.groupBy) !== getPropertyForObject(orderedItems[$index - 1], settings.groupBy)" role=presentation class=dropdown-header>{{ getGroupLabel(getPropertyForObject(option, settings.groupBy)) }}</li><li ng-if=settings.groupBy ng-class="{\'active\': isChecked(option) && settings.styleActive}" ng-repeat-end role=presentation><a ng-keydown="option.disabled || keyDownLink($event)" role=menuitem class=option tabindex=-1 ng-click="option.disabled || setSelectedItem(option, false, true)" ng-disabled=option.disabled><div ng-if=settings.checkBoxes class=checkbox><label><input class=checkboxInput type=checkbox ng-click="checkboxClick($event, option)" ng-checked=isChecked(option)> <span dm-dropdown-static-include={{settings.template}}></span></label></div><span ng-if=!settings.checkBoxes data-ng-class="{\'glyphicon glyphicon-ok\': isChecked(option)}"></span> <span dm-dropdown-static-include={{settings.template}}></span></a></li><li ng-if=!settings.groupBy ng-class="{\'active\': isChecked(option) && settings.styleActive}" role=presentation ng-repeat="option in options | filter:getFilter(input.searchFilter) | orderBy:\'\':false:orderFunction"><a ng-keydown="option.disabled || keyDownLink($event)" role=menuitem class=option tabindex=-1 ng-click="option.disabled || setSelectedItem(option, false, true)" ng-disabled=option.disabled><div ng-if=settings.checkBoxes class=checkbox><label><input class=checkboxInput type=checkbox ng-click="checkboxClick($event, option)" ng-checked=isChecked(option)> <span dm-dropdown-static-include={{settings.template}}></span></label></div><span ng-if=!settings.checkBoxes data-ng-class="{\'glyphicon glyphicon-ok\': isChecked(option)}"></span> <span ng-if=!settings.checkBoxes dm-dropdown-static-include={{settings.template}}></span></a></li><li class=divider ng-show="settings.selectionLimit > 1"></li><li role=presentation ng-show="settings.selectionLimit > 1"><a role=menuitem>{{selectedModel.length}} {{texts.selectionOf}} {{settings.selectionLimit}} {{texts.selectionCount}}</a></li></ul></div>'
    )
}]);
//# sourceMappingURL=maps/angularjs-dropdown-multiselect.min.js.map
