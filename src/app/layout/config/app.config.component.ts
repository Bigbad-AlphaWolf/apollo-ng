import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../app.menu.service';
import { LayoutService } from '../service/app.layout.service';

@Component({
    selector: 'app-config',
    templateUrl: './app.config.component.html'
})
export class AppConfigComponent implements OnInit {

    @Input() minimal: boolean;

    componentThemes: any[];

    constructor(public layoutService: LayoutService, public menuService: MenuService) {}

    get visible(): boolean {
        return this.layoutService.state.configSidebarVisible;
    }

    set visible(_val: boolean) {
        this.layoutService.state.configSidebarVisible = _val;
    }

    get menuMode(): string {
        return this.layoutService.config.menuMode;
    }

    set menuMode(_val: string) {
        this.layoutService.config.menuMode = _val;
        if (this.layoutService.isSlim || this.layoutService.isHorizontal) {
            this.menuService.onMenuStateChange(null);
        }
    }

    get colorScheme(): string {
        return this.layoutService.config.colorScheme;
    }

    set colorScheme(_val: string) {
        this.changeColorScheme(_val);
    }

    get inputStyle(): string {
        return this.layoutService.config.inputStyle;
    }

    set inputStyle(_val: string) {
        this.layoutService.config.inputStyle = _val;
    }

    get ripple(): boolean {
        return this.layoutService.config.ripple;
    }

    set ripple(_val: boolean) {
        this.layoutService.config.ripple = _val;
    }

    get transparentMenu(): boolean {
        return this.layoutService.config.transparentMenu;
    }

    set transparentMenu(_val: boolean) {
        this.layoutService.config.transparentMenu = _val;
    }

    ngOnInit() {
        this.componentThemes = [
            {name: 'indigo', color: '#6366F1'},
            {name: 'blue', color: '#3B82F6'},
            {name: 'purple', color: '#8B5CF6'},
            {name: 'teal', color: '#14B8A6'},
            {name: 'cyan', color: '#06b6d4'},
            {name: 'green', color: '#10b981'},
            {name: 'orange', color: '#f59e0b'},
            {name: 'pink', color: '#d946ef'}
        ];
    }

    onConfigButtonClick() {
        this.layoutService.showConfigSidebar();
    }

    changeColorScheme(colorScheme: string) {
        const themeLink = <HTMLLinkElement> document.getElementById('theme-link');
        const themeLinkHref = themeLink.getAttribute('href');
        const currentColorScheme = 'theme-' + this.layoutService.config.colorScheme;
        const newColorScheme = 'theme-' + colorScheme;
        const newHref = themeLinkHref.replace(currentColorScheme, newColorScheme);
        this.replaceThemeLink(newHref, () => {
            this.layoutService.config.colorScheme = colorScheme;
            this.layoutService.onConfigUpdate();
        });
    }

    changeTheme(theme: string) {
        const themeLink = <HTMLLinkElement> document.getElementById('theme-link');
        const newHref = themeLink.getAttribute('href').replace(this.layoutService.config.theme, theme);
        this.replaceThemeLink(newHref, () => {
            this.layoutService.config.theme = theme;
            this.layoutService.onConfigUpdate();
        });
    }

    replaceThemeLink(href: string, onComplete: Function) {
        const id = 'theme-link';
        const themeLink = <HTMLLinkElement> document.getElementById('theme-link');
        const cloneLinkElement = <HTMLLinkElement> themeLink.cloneNode(true);

        cloneLinkElement.setAttribute('href', href);
        cloneLinkElement.setAttribute('id', id + '-clone');

        themeLink.parentNode.insertBefore(cloneLinkElement, themeLink.nextSibling);

        cloneLinkElement.addEventListener('load', () => {
            themeLink.remove();
            cloneLinkElement.setAttribute('id', id);
            onComplete();
        });
    }
}